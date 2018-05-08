/*solution 1 */
function fizzbuzz(n) {

    //convert str into object as charcter of str as keys and its occurance as values
    for (let i=0; i<n ; i++) {

        if(i%3===0 &7 && i%5===0){
            console.log("fizzbuzz")
        }else if(i%3===0){
            console.log("fizz")
        }else if(i%5===0){
            console.log("buzz")
        }else{
            console.log(i)
        }
    }

}
fizzbuzz(50)

/*--------------------------------------------------------*/
