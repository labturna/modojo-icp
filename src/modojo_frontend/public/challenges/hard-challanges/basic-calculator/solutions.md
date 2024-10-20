```motoko
func calculate(s: String) : Int {
    let n = s.length();
    if (n == 0) {
        return 0;
    };
    var stack: [Int] = [];
    var sign: Int = 1;
    var result: Int = 0;
    var i: Int = 0;
    while (i < n) {
        let c = s.get(i);
        if (c == ' ') {
            i += 1;
            continue;
        };
        if (c == '+') {
            sign := 1;
            i += 1;
        } else if (c == '-') {
            sign := -1;
            i += 1;
        } else if (c == '(') {
            stack.push(result);
            stack.push(sign);
            result := 0;
            sign := 1;
            i += 1;
        } else if (c == ')') {
            result := stack.pop() * result + stack.pop();
            i += 1;
        } else {
            var num: Int = 0;
            while (i < n && s.get(i) >= '0' && s.get(i) <= '9') {
                num := num * 10 + s.get(i) - '0';
                i += 1;
            };
            result += sign * num;
        };
    };
    return result;
};
```