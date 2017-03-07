// Given a string, find the length of the longest substring without repeating characters.
//
//     Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) {
        return 0;
    }

    var substringHash = getSubstringHash(s);

    return Object.values(substringHash).reduce(function(a,b){
        return Math.max(a,b);
    })
};

function getSubstringHash(s) {
    if (!s.length) {
        return {};
    }

    var substringHash = {};
    var substring = '';

    for (var i = 0; i < s.length; i++) {
        var element = s[i];
        if (substring.indexOf(element) !== -1) {
            substringHash[substring] = substring.length;
            substring = substring.slice(substring.indexOf(element) + 1) + element;
            continue;
        }
        substring += element;
    }

    substringHash[substring] = substring.length;

    return substringHash;
}