import HashMap "mo:base/HashMap";
import Time "mo:base/Time";

module {
    public type UserProgressType = HashMap.HashMap<Principal, UserProgress>;
    public type UserProgress = {
    completedChallengeCount: Nat;
    successRate: Float; // Başarı oranı
    registrationDate: Time.Time; // Kayıt tarihi
    completedChallenges: [Text]; // Tamamlanan challenge'lar
};
    public type WeeklyUsers = [var Nat];
    public type MonthlyUsers = [var Nat];

};