class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let reversedString = cleanedString.split('').reverse().join('');

        if (cleanedString == reversedString) {
            return true;
        }

        return false;
    }
}
