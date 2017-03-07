// Given two strings s and t, write a function to determine if t is an anagram of s.
//
//     For example,
//     s = "anagram", t = "nagaram", return true.
//     s = "rat", t = "car", return false.
//
//     Note:
// You may assume the string contains only lowercase alphabets.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    var sElementsHash = getStringElementsHash(s);
    var tElementsHash = getStringElementsHash(t);

    var sElementsHashKeys = Object.keys(sElementsHash);
    for(var i = 0; i < sElementsHashKeys.length; i++) {
        var sElement = sElementsHashKeys[i];
        if (!tElementsHash[sElement] || tElementsHash[sElement] !== sElementsHash[sElement]) {
            return false;
        }
    }

    return true;
};

function getStringElementsHash(string) {
    var elementsHash = {};

    for(var i = 0; i < string.length; i++) {
        var element = string[i];
        !!elementsHash[element]? elementsHash[element]++ : elementsHash[element] = 1;
    }

    return elementsHash;
}