
```motoko
func majorityElement(nums: [Int]) : Int {
    var candidate: Int = 0;
    var count: Int = 0;
    for (num in nums.vals()) {
        if (count == 0) {
            candidate := num;  
        };
        if (num == candidate) {
            count += 1;  
        } else {
            count -= 1;  
        }
    };

    return candidate; 
};

```
