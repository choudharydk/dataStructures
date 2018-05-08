
/**
 * split('') -> convert string to array
 * reverse function can only be applied to array
 * finally apply join('') method to convert array to string
 * In solution-2 array every() method converts array to single value and takes two parameter, arrow function and initial arg.
 * 
 * /

/* solution 1 */

function isPalindrome1(str) {
    var reversed= str.split('').reverse().join('');

        return str===reversed
}

var result1 = isPalindrome1("naman");

if(result1===true){
    console.log("given string 1 is palindrome");
}else{
    console.log("given string 1 is not palindrome");
}

/*--------------------------------------------------------*/

/* solution 2 */
function isPalindrome2(str) {
   return str.split('').every((char,i) =>{
         return char === str[str.length -i-1]
    });

        return str===rev
}

var result2 = isPalindrome2("raman");

if(result2===true){
    console.log("given string 2 is palindrome");
}else{
    console.log("given string 2 is not  palindrome");
}
/*--------------------------------------------------------*/