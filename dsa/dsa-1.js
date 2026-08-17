//Contains Duplicate - NeetCode 150

class Solution {
    hasDuplicate(nums) {
    const vistos = new Set();
        for (const num of nums){
            if (vistos.has(num)){
                return true}
        vistos.add(num)};
        return false
    }}