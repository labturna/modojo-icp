```motoko
import D "mo:base/Debug";

let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

D.print("numbers: " # debug_show(numbers));
```
