```motoko
func singleNumber(nums: [Int]) : Int {
    var result: Int = 0;
    for (num in nums.vals()) {
        result := result ^ num;
    };
    return result;
};
```

