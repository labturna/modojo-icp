import Debug "mo:base/Debug";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Array "mo:base/Array";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import Time "mo:base/Time";
import Nat "mo:base/Nat";
//import Float "mo:base/Float";
import Int "mo:base/Int";
import Types "src/Types";
import Rating "src/Rating";

actor ModojoProgressTracker {
  private type UserType = Types.UserType;
  private type WeeklyUsersType = Types.WeeklyUsers;
  private type MonthlyUsersType = Types.MonthlyUsers;
  private type UserProgressType = Types.UserProgressType;
  private type ChallengeAttemps = Types.ChallengeAttemps;
  private type ChallengeInfo = Types.ChallengeInfo;

  private let userProgress : UserType = HashMap.HashMap<Principal, UserProgressType>(10, Principal.equal, Principal.hash);
  private let challengeAttemps: ChallengeAttemps= HashMap.HashMap<Text, Nat>(10, Text.equal, Text.hash);
  private var totalUsers : Nat = 0;
  private var weeklyUsers : WeeklyUsersType = Array.init<Nat>(7, 0); // Track users for each day of the week
  private var monthlyUsers : MonthlyUsersType = Array.init<Nat>(12, 0); // Track users for each month

    // users part
    public func logInUser(user: Principal) : async Bool {
        switch (userProgress.get(user)) {
            case null {
                Debug.print(debug_show(user));
                userProgress.put(user, {
                    username = "Unknown";
                    completedChallengeCount = 0;
                    score = 0.0;
                    registrationDate = Time.now();
                    completedChallenges = [];
                });
                await incrementTotalUsers();
                await updateWeeklyUsers();
                await updateMonthlyUsers();
                return true;
            };
            case (?_) {
                return false;
            };
        };
    };

    // update username
    public func updateUsername(user: Principal, newUsername: Text) : async Bool {
        switch (userProgress.get(user)) {
            case (?progress) {
                let updatedProgress = { 
                    progress with 
                    username = newUsername 
                };
                userProgress.put(user, updatedProgress);
                return true;
            };
            case null {
                return false;
            };
        };
    };

  private func incrementTotalUsers() : async () {
    totalUsers += 1;
  };
  private func getCurrentDay(): Nat {
    let timeInSeconds = Time.now() / 1_000_000_000; 
    let daysSinceEpoch = timeInSeconds / 86400; 
    let currentDay = (daysSinceEpoch + 3) % 7; 
    return Int.abs(currentDay); 
  };
  
  private func getCurrentMonth(): Nat {
    let time = Time.now();
    let month = (time % 31_536_000_000_000_000) / 2_592_000_000_000_000;
    return Int.abs(month) - 1; 
  };
  private func updateWeeklyUsers() : async () {
      let currentDay = getCurrentDay();
      weeklyUsers[currentDay] := weeklyUsers[currentDay] + 1;
  };

  private func updateMonthlyUsers() : async () {
      let currentMonth = getCurrentMonth();
      monthlyUsers[currentMonth] := monthlyUsers[currentMonth] + 1;
  };
 public query func getCurrentDateInfo(): async Text {
    let currentDay = getCurrentDay();
    let currentMonth = getCurrentMonth();
    return "Today is day " # Nat.toText(currentDay) # " of the week and month " # Nat.toText(currentMonth) # ".";
  };
  public query func getTotalUsers() : async Nat {
    return totalUsers;
  };

  public query func getWeeklyUsers() : async [Nat] {
    return Array.freeze(weeklyUsers);
  };

  public query func getMonthlyUsers() : async [Nat] {
    return Array.freeze(monthlyUsers);
  };

  public query func getUserDetails(user : Principal) : async ?UserProgressType {
      switch (userProgress.get(user)) {
          case (?progress) return ?progress;
          case null return null;
      };
  };

  public query func getAllUsersDetails() : async [UserProgressType] {
      let allUserDetails = Iter.toArray(userProgress.vals());
      return allUserDetails;
  };

  // --------------------------------------------------------------------

public func completeChallenge(
    user: Principal, 
    challenge: ChallengeInfo, 
    isSuccess: Bool
) : async Bool {
    Debug.print(debug_show(user));
    Debug.print(debug_show(challenge));
    Debug.print(debug_show(isSuccess));
    switch (userProgress.get(user)) {
        case (?progress) {
            Debug.print(debug_show(progress));

            // Update challenge attemps
            let attempts = challengeAttemps.get(challenge.id);
            Debug.print(debug_show(attempts));
            let newAttempts = switch (attempts) {
                case (null) 1;
                case (?count) count + 1;
            };
            challengeAttemps.put(challenge.id, newAttempts);

            if (isSuccess == false) {
                return false;
            };

            // If challange has been completed.
            if (Array.indexOf(challenge.name, progress.completedChallenges, Text.equal) != null) {
                return false;
            } else {
                let updatedChallenges = Array.append(progress.completedChallenges, [challenge.name]);
                let newScore = Rating.calculateRating(challenge.difficulty, newAttempts) + progress.score;
                Debug.print(debug_show(newScore));

                let updatedProgress = {
                    username = progress.username;
                    completedChallengeCount = progress.completedChallengeCount + 1;
                    score = newScore;
                    registrationDate = progress.registrationDate;
                    completedChallenges = updatedChallenges;
                };
                userProgress.put(user, updatedProgress);
                Debug.print(debug_show(true));
                return true;
            };
        };
        case null {
            let attemptsMap = HashMap.HashMap<Text, Nat>(10, Text.equal, Text.hash);
            attemptsMap.put(challenge.id, 1);

            if (isSuccess == false) {
                return false;
            };

            userProgress.put(user, {
                username = "Unknown";
                completedChallengeCount = 1;
                score = 1.0;
                registrationDate = Time.now();
                completedChallenges = [challenge.name];
            });
            return true;
        };
    };
};

  
    // public func completeChallenge(user : Principal, challengeId : Text, difficulty:Text) : async Bool {
    //     switch (userProgress.get(user)) {
    //         case (?progress) {
    //             if (Array.indexOf(challengeId, progress.completedChallenges, Text.equal) != null) {
    //                 return false;
    //             } else {
    //                 let updatedChallenges = Array.append(progress.completedChallenges, [challengeId]);
    //                 userProgress.put(user, {
    //                     completedChallengeCount = progress.completedChallengeCount + 1; // Tamamlanan challenge sayısını artır
    //                     score = Rating.calculateRating(difficulty, 1); // Burası için bir fonksiton yaz
    //                     registrationDate = progress.registrationDate; // Kayıt tarihini koru
    //                     completedChallenges = updatedChallenges; // Güncellenmiş challenge listesini kullan
    //                 });
    //                 return true;
    //             };
    //         };
    //         case null {
    //             userProgress.put(user, {
    //                 completedChallengeCount = 1; // İlk challenge tamamlandı
    //                 score = 1.0; // İlk challenge için başarı oranı 100%
    //                 registrationDate = Time.now(); // Kayıt tarihi
    //                 completedChallenges = [challengeId]; // İlk challenge'ı ekle
    //             });
    //             return true;
    //         };
    //     };
    // };
    


  // --------------------------------------------------------------------

  public func debugAllProgress() : async () {
    let entriesArray = Iter.toArray(userProgress.entries());
    Debug.print(debug_show (entriesArray));
  };
};
