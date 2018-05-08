/**
 * use regular expression to remove all special characters from strings
 * convert string into object using character map
 * compare length of keys of both object, if equal then proceed for comparision
 */
/*solution 1 */
function anagrams1(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

var result1 = anagrams1("hello","eloh")
if(result1==true){
    console.log("both  strings by solution 1 are anagarm")
}else{
    console.log("both  strings by solution 1 are not anagarm")
}
/*--------------------------------------------------------*/

/*solution 2 */
 
/**
  * remove all special character from string.
  * convert string into array and apply sort() and convert it back to string
  * use strict equality for comparision
  */
function anagrams2(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
  }
  
  function cleanString(str) {
    return str
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }
  var result2 = anagrams2("hello","elloh")
if(result2==true){
    console.log("both  strings by solution 2 are anagarm")
}else{
    console.log("both  strings by solution 2 are not anagarm")
}