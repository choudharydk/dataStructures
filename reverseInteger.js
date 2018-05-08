/**
 * convert interger to string and then convert string to array and apply reverse function.
 * convert it back to string followed by integer
 * Math.sign(arg) will return negative if arg<0 and positive for arg>0
 * 
 */


/*solution 1 */
function reverseInt1(int) {
    const str = int.toString();
    const reverse = str.split('').reverse().join('');
    const result = parseInt(reverse);
if(int<0){
    return result*(-1)
}
    return result;

}
var rev1 = reverseInt1(789)
console.log("reverse Integer by solution 1 is----->", rev1)
/*--------------------------------------------------------*/

/*solution 2 */
function reverseInt2(int) {
    const str = int.toString();
    const reverse = str.split('').reverse().join('');
    const result = parseInt(reverse);

    return result * Math.sign(int);

}
var rev2 = reverseInt1(-156)
console.log("reverse Integer by solution 2 is----->", rev2)
/*--------------------------------------------------------*/