import Debug "mo:base/Debug";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Array "mo:base/Array";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Nat "mo:base/Nat";

actor ModojoProgressTracker {

  private let userProgress: HashMap.HashMap<Principal, [Text]> = HashMap.HashMap<Principal, [Text]>(10, Principal.equal, Principal.hash);
  private var totalUsers: Nat = 0;
  private var weeklyUsers: [var Nat] = Array.init<Nat>(7, 0); // Track users for each day of the week
  private var monthlyUsers: [var Nat] = Array.init<Nat>(12, 0); // Track users for each month

  public func logInUser(user: Principal): async Bool {
    if (userProgress.get(user) == null) {
      userProgress.put(user, []);
      totalUsers += 1;

      // Update weekly and monthly users count
      let currentDay = getCurrentDay();
      let currentMonth = getCurrentMonth();
      weeklyUsers[currentDay] := weeklyUsers[currentDay] + 1;
      monthlyUsers[currentMonth] := monthlyUsers[currentMonth] + 1;

      return true;
    } else {
      return true;
    }
  };

  public func completeChallenge(user: Principal, challengeId: Text): async Bool {
    switch (userProgress.get(user)) {
      case (?completedChallenges) {
        if (Array.indexOf(challengeId, completedChallenges, Text.equal) != null) {
          return false;
        } else {
          let updatedChallenges = Array.append(completedChallenges, [challengeId]);
          userProgress.put(user, updatedChallenges);
          return true;
        }
      };
      case null {
        userProgress.put(user, [challengeId]);
        return true;
      };
    }
  };

  public query func getCompletedChallenges(user: Principal): async [Text] {
    switch (userProgress.get(user)) {
      case (?completedChallenges) completedChallenges;
      case null [];
    }
  };

  public query func isChallengeCompleted(user: Principal, challengeId: Text): async Bool {
    switch (userProgress.get(user)) {
      case (?completedChallenges) Array.indexOf(challengeId, completedChallenges, Text.equal) != null;
      case null false;
    }
  };

  public func debugAllProgress(): async () {
    let entriesArray = Iter.toArray(userProgress.entries());
    Debug.print(debug_show(entriesArray));
  };

  public query func getTotalUsers(): async Nat {
    return totalUsers;
  };

  public query func getWeeklyUsers(): async [Nat] {
    return Array.freeze(weeklyUsers);
  };

  public query func getMonthlyUsers(): async [Nat] {
    return Array.freeze(monthlyUsers);
  };

  // Helper function to get the current day of the week (0 to 6)
  private func getCurrentDay(): Nat {
    let time = Time.now();
    let day = (time % 604800_000_000_000) / 86_400_000_000_000;
    return Int.abs(day); // 0 represents Monday, 6 represents Sunday
  };

  // Helper function to get the current month (0 to 11)
  private func getCurrentMonth(): Nat {
    let time = Time.now();
    let month = (time % 31_536_000_000_000_000) / 2_592_000_000_000_000;
    return Int.abs(month); // 0 represents January, 11 represents December
  };
};