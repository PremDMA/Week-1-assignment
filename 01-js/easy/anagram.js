/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var charMapStr1 = getCharMap(str1);
  var charMapStr2 = getCharMap(str2);

  var mapKeys1 = Object.keys(charMapStr1);
  var mapKeys2 = Object.keys(charMapStr2);

  if(mapKeys1.length != mapKeys2.length) {
    return false;
  }

  for( let i=0 ; i<mapKeys1.length ;i++) {
    if( charMapStr1[mapKeys1[i]] != charMapStr2[mapKeys1[i]]) {
      return false;
    }
    
  }
  return true;
}

function getCharMap(str) {
  var charMap = {};
  for( let i =0 ; i< str.length ; i++) {
    charMap[str.charAt(i)] = charMap[str.charAt(i)] ? charMap[str.charAt(i)] +1 : 1;
  }
  return charMap;
}

module.exports = isAnagram;
