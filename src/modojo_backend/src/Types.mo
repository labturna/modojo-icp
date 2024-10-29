import HashMap "mo:base/HashMap";
import Time "mo:base/Time";

module {
    public type UserType = HashMap.HashMap<Principal, UserProgressType>;
    public type ChallengeAttemps = HashMap.HashMap<Text, Nat>;
    public type UserProgressType = {
        username: Text;
        completedChallengeCount: Nat;
        score: Float; // Başarı oranı
        registrationDate: Time.Time; // Kayıt tarihi
        completedChallenges: [Text]; // Tamamlanan challenge'lar
        projectUrls: [Text];
    };
    public type WeeklyUsers = [var Nat];
    public type ChallengeInfo = {
    id: Text;
    name: Text;
    difficulty: Text;
    };
    public type MonthlyUsers = [var Nat];
};