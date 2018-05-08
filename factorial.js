/*program for factorial of a given number */

function fact(n){
    if(n==0 || n==1){
        return 1;
    }
    return n*fact(n-1)
}

var result =fact(1000)

console.log("factoral of given number is",result)