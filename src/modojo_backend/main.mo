import Debug "mo:base/Debug";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Array "mo:base/Array";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import Time "mo:base/Time";
// import Int "mo:base/Int";
import Nat "mo:base/Nat";
import Types "src/Types";
import Func "src/Func";
import Float "mo:base/Float";

actor ModojoProgressTracker {
  private type UserProgressType = Types.UserProgressType;
  private type WeeklyUsersType = Types.WeeklyUsers;
  private type MonthlyUsersType = Types.MonthlyUsers;
  private type UserProgress = Types.UserProgress;

  private let userProgress : UserProgressType = HashMap.HashMap<Principal, UserProgress>(10, Principal.equal, Principal.hash);
  private var totalUsers : Nat = 0;
  private var weeklyUsers : WeeklyUsersType = Array.init<Nat>(7, 0); // Track users for each day of the week
  private var monthlyUsers : MonthlyUsersType = Array.init<Nat>(12, 0); // Track users for each month

  // users part
  public func logInUser(user : Principal) : async Bool {
    if (userProgress.get(user) == null) {
    Debug.print(debug_show (user));
        userProgress.put(user, {
            completedChallengeCount = 0; // Başlangıçta tamamlanan challenge sayısı
            successRate = 0.0; // Başlangıçta başarı oranı
            registrationDate = Time.now(); // Kayıt tarihi
            completedChallenges = []; // Tamamlanan challenge'lar listesi
        });
      await incrementTotalUsers();
      await updateWeeklyUsers();
      await updateMonthlyUsers();
    } ;
      return true;
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

  public query func getUserDetails(user : Principal) : async ?UserProgress {
      switch (userProgress.get(user)) {
          case (?progress) return ?progress; // Kullanıcı bilgilerini döndür
          case null return null; // Kullanıcı bulunamadıysa null döndür
      };
  };

  public query func getAllUsersDetails() : async [UserProgress] {
      let allUserDetails = Iter.toArray(userProgress.vals()); // vals() metodunu kullanın
      return allUserDetails;
  };

  // --------------------------------------------------------------------
    public func completeChallenge(user : Principal, challengeId : Text) : async Bool {
        switch (userProgress.get(user)) {
            case (?progress) {
                if (Array.indexOf(challengeId, progress.completedChallenges, Text.equal) != null) {
                    return false;
                } else {
                    let updatedChallenges = Array.append(progress.completedChallenges, [challengeId]);
                    userProgress.put(user, {
                        completedChallengeCount = progress.completedChallengeCount + 1; // Tamamlanan challenge sayısını artır
                        successRate = Float.div(1.23, 1e2);// Burası için bir fonksiton yaz
                        registrationDate = progress.registrationDate; // Kayıt tarihini koru
                        completedChallenges = updatedChallenges; // Güncellenmiş challenge listesini kullan
                    });
                    return true;
                };
            };
            case null {
                userProgress.put(user, {
                    completedChallengeCount = 1; // İlk challenge tamamlandı
                    successRate = 1.0; // İlk challenge için başarı oranı 100%
                    registrationDate = Time.now(); // Kayıt tarihi
                    completedChallenges = [challengeId]; // İlk challenge'ı ekle
                });
                return true;
            };
        };
    };
  // challenges part
  // public func completeChallenge(user : Principal, challengeId : Text) : async Bool {
  //   switch (userProgress.get(user)) {
  //     case (?completedChallenges) {
  //       if (Array.indexOf(challengeId, completedChallenges, Text.equal) != null) {
  //         return false;
  //       } else {
  //         let updatedChallenges = Array.append(completedChallenges, [challengeId]);
  //         userProgress.put(user, updatedChallenges);
  //         return true;
  //       };
  //     };
  //     case null {
  //       userProgress.put(user, [challengeId]);
  //       return true;
  //     };
  //   };
  // };
  // public query func getCompletedChallenges(user : Principal) : async [Text] {
  //   switch (userProgress.get(user)) {
  //     case (?completedChallenges) completedChallenges;
  //     case null [];
  //   };
  // };
  // public query func isChallengeCompleted(user : Principal, challengeId : Text) : async Bool {
  //   switch (userProgress.get(user)) {
  //     case (?completedChallenges) Array.indexOf(challengeId, completedChallenges, Text.equal) != null;
  //     case null false;
  //   };
  // };

  // --------------------------------------------------------------------

  public func debugAllProgress() : async () {
    let entriesArray = Iter.toArray(userProgress.entries());
    Debug.print(debug_show (entriesArray));
  };
};
