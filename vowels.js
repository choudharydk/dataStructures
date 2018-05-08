/* solution 1 */

function vowels1(str) {
    let count = 0;
  
    for (let char of str.toLowerCase()) {
      if (char ==="a" || char==="e" || char==="i" || char==="o" || char==="u") {
        count++;
      }
    }
  
    return count;
  }
  
  var result1 = vowels1("hi there")
  console.log("number of vowels by solution 1 is----->", result1)
 /*--------------------------------------------------------*/

/*solution 2 */  

function vowels2(str) {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

var result2 = vowels2("hi there")
console.log("number of vowels by solution 2 is----->", result2)


/*--------------------------------------------------------*/

/*solution 3 */  
function vowels3(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  }
  var result3 = vowels3("hi there")
console.log("number of vowels by solution 3 is----->", result3)