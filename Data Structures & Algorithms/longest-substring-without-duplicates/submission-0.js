class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let uniqueChar = new Set();
        let start = 0;
        let longestSubstring = 0;

        for (let end = 0; end < s.length; end ++) {
            while (uniqueChar.has(s[end])) {
                uniqueChar.delete(s[start]);
                start++;
            }

            uniqueChar.add(s[end]);

            longestSubstring = Math.max(longestSubstring, end - start + 1);
        }

        return longestSubstring;
    }
}
