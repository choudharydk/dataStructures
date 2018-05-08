//'use strict';

/**
 * split('') -> convert string to array
 * reverse function can only be applied to array
 * finally apply join('') method to convert array to string
 * In solution-3, for..of loop can only be applied to string/array/list (in  case of object , use for..in) to retrive each character of string.
 * In solution-4 array reduce() method converts array to single value and takes two parameter, arrow function and initial arg.
 * 
 * / 

/*solution 1 */
function reverseString1(str) {
    const arr = str.split('');
    const reverse = arr.reverse();
    const result = reverse.join('');

    return result;

}
var rev1 = reverseString1("I love Codeforwin.")
console.log("reverse string by solution 1 is----->", rev1)
/*--------------------------------------------------------*/

/* solution 2 */
function reverseString2(str) {
    return str
        .split('')
        .reverse()
        .join('');

}
var rev2 = reverseString2("I love Codeforwin.")
console.log("reverse string by solution 2 is----->", rev2)
/*--------------------------------------------------------*/
/* solution 3 */

function reverseString3(str) {
    let reverse = '';
    for (let character of str) {
        reverse = character+reverse;
    }
    return reverse

}
var rev3 = reverseString3("I love Codeforwin.")
console.log("reverse string by solution 3 is----->", rev3)

/*--------------------------------------------------------*/
/* solution 4 */

function reverseString4(str) {

    return str.split('').reduce(( reverse,character) => {
        return character+reverse;
    },'')

}
var rev4 = reverseString3("I love Codeforwin.")
console.log("reverse string by solution 4 is----->", rev4)

/*--------------------------------------------------------*/