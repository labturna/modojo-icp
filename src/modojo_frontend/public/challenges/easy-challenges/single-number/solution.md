```motoko
import Array "mo:base/Array";
import Int32 "mo:base/Int32";

func singleNumber(nums: [Int]) : Int {
    var result: Int32 = Int32.fromInt(0);
    for (num in nums.vals()) {
        result := Int32.bitxor(result, Int32.fromInt(num));
    };
    return Int32.toInt(result);
};
```

