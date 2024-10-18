```motoko
func isPalindrome(x: Int): Bool {
    if (x < 0) {
        return false;
    };

    var original: Int = x; // Convert Int to Nat since x is non-negative
    var reversed: Int = 0;

    while (original > 0) {
        let digit: Int = original % 10;
        reversed := reversed * 10 + digit;
        original := original / 10;
    };

    return x == reversed;
};

```