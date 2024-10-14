import Time "mo:base/Time";
import Int "mo:base/Int";

module {
    public func getCurrentMonth() : Nat {
        let time = Time.now();
        let month = (time % 31_536_000_000_000_000) / 2_592_000_000_000_000;
        return Int.abs(month); // 0 represents January, 11 represents December
    };

    public func getCurrentDay() : Nat {
        let time = Time.now();
        let day = (time % 604800_000_000_000) / 86_400_000_000_000;
        return Int.abs(day); // 0 represents Monday, 6 represents Sunday
    };
};
