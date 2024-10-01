import Debug "mo:base/Debug";
import HashMap "mo:base/HashMap";
import Int "mo:base/Int";
import Iter "mo:base/Iter";

// Function to solve the Two Sum problem
// code here

// Test the function
let nums = [2, 7, 11, 15];
let target = 13;

let result = twoSum(nums, target);

// Print the output
Debug.print(debug_show(result));
