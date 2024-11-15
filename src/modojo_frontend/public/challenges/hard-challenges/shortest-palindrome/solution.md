```motoko
func shortestPalindrome(s: String) : String {
    let n = s.length();
    if (n == 0) {
        return "";
    };
    let rev = s.reverse();
    for (i in 0..n) {
        if (s.substring(0, n - i) == rev.substring(i)) {
            return rev.substring(0, i) # s;
        };
    };
    return "";
};
```