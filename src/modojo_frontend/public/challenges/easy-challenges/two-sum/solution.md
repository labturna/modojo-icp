```motoko
import HashMap "mo:base/HashMap";
import Int "mo:base/Int";
import Iter "mo:base/Iter";

// Function to solve the Two Sum problem
func twoSum(nums: [Int], target: Int): ?(Int, Int) {
    let map = HashMap.HashMap<Int, Int>(10, Int.equal, Int.hash);

    for (i in Iter.range(0, nums.size() - 1)) {
        let complement = target - nums[i];

        switch (map.get(complement)) {
            case (?index) return ?(index, i);
            case null map.put(nums[i], i);
        };
    };

    return null;
};

```