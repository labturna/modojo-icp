import HashMap "mo:base/HashMap";
import Time "mo:base/Time";

module {
    public type UserType = HashMap.HashMap<Principal, UserProgressType>;
    public type ChallengeAttemps = HashMap.HashMap<Text, Nat>;
    public type UserProgressType = {
        completedChallengeCount: Nat;
        score: Float; // Başarı oranı
        registrationDate: Time.Time; // Kayıt tarihi
        completedChallenges: [Text]; // Tamamlanan challenge'lar
        // attempts: HashMap.HashMap<Text, Nat>; // Challenge başına deneme sayısı
    };
    public type WeeklyUsers = [var Nat];
    public type MonthlyUsers = [var Nat];
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