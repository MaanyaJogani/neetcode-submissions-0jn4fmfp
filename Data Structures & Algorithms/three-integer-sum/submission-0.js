class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        let sum = 0;
        nums.sort((a,b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) 
                break;
            if (i > 0 && nums[i] === nums[i - 1])
                continue;
            for (let j = i+1, k = nums.length -1; j < k;){
                sum = nums[i] + nums[j] + nums[k];
                if (sum < 0) {
                    j++;
                } else if (sum > 0) {
                    k--;
                } else {
                    result.push([nums[i], nums[j], nums[k]]);
                    while (nums[j] === nums[j + 1]) j++;
                    while (nums[k] === nums[k - 1]) k--;
                    j++;
                    k--;
                }
            }
        }

        return result;
    }
}
