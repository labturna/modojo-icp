import Debug "mo:base/Debug";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Array "mo:base/Array";
import Text "mo:base/Text";
import Iter "mo:base/Iter";

actor ModojoProgressTracker {

  private let userProgress: HashMap.HashMap<Principal, [Text]> = HashMap.HashMap<Principal, [Text]>(10, Principal.equal, Principal.hash);
  private var totalUsers: Nat = 0;

  public func logInUser(user: Principal): async Bool {
    if (userProgress.get(user) == null) {
      userProgress.put(user, []);
      totalUsers += 1;
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
  }
};
