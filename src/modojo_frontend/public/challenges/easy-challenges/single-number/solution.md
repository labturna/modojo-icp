```motoko
func singleNumber(nums: [Int]) : Int {
        var result: Int = 0;
        
        // Tüm elemanları XOR ile birleştiriyoruz
        for (num in nums) {
            result := result ^ num;
        }

        return result;
    }
```

