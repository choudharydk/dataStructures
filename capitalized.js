/**
 * *  step1 -> make an empty array words
 * step2 -> split the input string by spaces to get the array
 * step3 ->     for each word in array
 * step4 ->         uppercase the first letter of the word
 * step5 ->         join first letter with rest of the string
 * step6 ->         push result into "words" array
 * step7 ->  join words into string and return it
 */ 

  /* solution 1 */
 function capitalize1(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}
var result1 = capitalize1("hi there")
console.log("capitalize String by solution 1 is----->", result1)

/*--------------------------------------------------------*/

/*solution 2 */

/**
 * *  step1 -> make an empty string called result with first letter capitalized
 * step2 ->     for each character in string
 * step3 ->         if the character to the left space
 * step4 ->           capitilized it and add it to the result
 * step6 ->         else
 * step7 ->           add it to result
 */ 
function capitalize2(str) {
    let result = str[0].toUpperCase();
  
    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] === ' ') {
        result += str[i].toUpperCase();
      } else {
        result += str[i];
      }
    }
  
    return result;
  }
  var result2 = capitalize1("hi there hello")
console.log("capitalize String by solution 2 is----->", result2)
