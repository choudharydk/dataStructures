/**
 * convert string  into object usimg for..of loop
 * once we have object ready with character as keys and occurance as value, iterate over object to return maxchar key.
 * 
 */


/*solution 1 */
function maxChar(str) {
    let charMap = {};
    let max = 0;
    let maxChar = '';

    //convert str into object as charcter of str as keys and its occurance as values
    for (let character of str) {
        //to handle undefined case i.e first time charmap[H]= undefined. If so, assign its value to 1 else increment it.
        if (!charMap[character]) {
            charMap[character] = 1;
        } else {
            charMap[character]++
        }
    }
    console.log("charMap is", charMap)
    //use for..in loop to iterate over object (charMap) keys and return character with maximux occurance.
    for (let character in charMap) {

        if (charMap[character] > max) {
            max = charMap[character];
            maxChar = character;
        }
    }

    return maxChar;

}
var result = maxChar("hello There")
console.log("Max character in a string by solution 1 is----->", result)
/*--------------------------------------------------------*/

/*solution 2 */
