import Debug "mo:base/Debug";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Array "mo:base/Array";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import Time "mo:base/Time";
import Nat "mo:base/Nat";
import Float "mo:base/Float";
// import Int "mo:base/Int";


import Types "src/Types";
import Func "src/Func";
import Rating "src/Rating";

actor ModojoProgressTracker {
  private type UserType = Types.UserType;
  private type WeeklyUsersType = Types.WeeklyUsers;
  private type MonthlyUsersType = Types.MonthlyUsers;
  private type UserProgressType = Types.UserProgressType;
  private type ChallengeAttemps = Types.ChallengeAttemps;

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
                completedChallengeCount = 0; // Başlangıçta tamamlanan challenge sayısı
                successRate = 0.0; // Başlangıçta başarı oranı
                registrationDate = Time.now(); // Kayıt tarihi
                completedChallenges = []; // Tamamlanan challenge'lar listesi
                // attempts = HashMap.HashMap<Text, Nat>(10, Text.equal, Text.hash); // Boş attempts map'i
            });
            await incrementTotalUsers();
            await updateWeeklyUsers();
            await updateMonthlyUsers();
            return true;
        };
        case (?progress) {
            return false;
        };
    };
};


  private func incrementTotalUsers() : async () {
    totalUsers += 1;
  };

  private func updateWeeklyUsers() : async () {
      let currentDay = Func.getCurrentDay();
      weeklyUsers[currentDay] := weeklyUsers[currentDay] + 1;
  };

  private func updateMonthlyUsers() : async () {
      let currentMonth = Func.getCurrentMonth();
      monthlyUsers[currentMonth] := monthlyUsers[currentMonth] + 1;
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
          case (?progress) return ?progress; // Kullanıcı bilgilerini döndür
          case null return null; // Kullanıcı bulunamadıysa null döndür
      };
  };

  public query func getAllUsersDetails() : async [UserProgressType] {
      let allUserDetails = Iter.toArray(userProgress.vals()); // vals() metodunu kullanın
      return allUserDetails;
  };

  // --------------------------------------------------------------------


public func completeChallenge(user: Principal, challengeId: Text, difficulty: Text, isSuccess: Bool) : async Bool {
    // Check if the user already has progress data
    switch (userProgress.get(user)) {
        case (?progress) {
            // Update the number of attempts
            let attempts = challengeAttemps.get(challengeId);
            let newAttempts = switch (attempts) {
                case (null) 1;
                case (?count) count + 1;
            };
            challengeAttemps.put(challengeId, newAttempts);

            if (isSuccess == false) {
                // If the attempt failed, only the attempt count is updated
                return false;
            };

            // If the challenge is already completed, do nothing
            if (Array.indexOf(challengeId, progress.completedChallenges, Text.equal) != null) {
                return false;
            } else {
                // if successfully completed
                let updatedChallenges = Array.append(progress.completedChallenges, [challengeId]);
                let newSuccessRate = Rating.calculateRating(difficulty, newAttempts) + progress.successRate;

                userProgress.put(user, {
                    completedChallengeCount = progress.completedChallengeCount + 1;
                    successRate = newSuccessRate;
                    registrationDate = progress.registrationDate;
                    completedChallenges = updatedChallenges;
                });
                return true;
            };
        };
        case null {
            let attemptsMap = HashMap.HashMap<Text, Nat>(10, Text.equal, Text.hash);
            attemptsMap.put(challengeId, 1);

            if (isSuccess == false) {
                return false;
            };
            userProgress.put(user, {
                completedChallengeCount = 1;
                successRate = 1.0;
                registrationDate = Time.now();
                completedChallenges = [challengeId];
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
    //                     successRate = Rating.calculateRating(difficulty, 1); // Burası için bir fonksiton yaz
    //                     registrationDate = progress.registrationDate; // Kayıt tarihini koru
    //                     completedChallenges = updatedChallenges; // Güncellenmiş challenge listesini kullan
    //                 });
    //                 return true;
    //             };
    //         };
    //         case null {
    //             userProgress.put(user, {
    //                 completedChallengeCount = 1; // İlk challenge tamamlandı
    //                 successRate = 1.0; // İlk challenge için başarı oranı 100%
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
