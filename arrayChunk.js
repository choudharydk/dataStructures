/**
 *  step1 -> create an empty array to hold chunks called chunked
 * step2 -> for each element in the "unchunked" array
 * step3 ->     retrieve the last element in chunked
 * step4 ->       if last element does not exist or if its length is equal to chunk size
 * step5 ->          push a new chunk into "chunked" with the current element
 * step6 ->       else add the current element into the chunk
 */

 /* solution 1 */
 function chunk1(array, size) {
  const chunked = [];

  for (let element of array) {
      console.log("length",chunked.length)
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
        console.log("in if")
      chunked.push([element]);
    } else {
        console.log("in else")
      last.push(element);
    }
    console.log(element+" chucked is ",chunked)
  }

  return chunked;
}
var result1 = chunk1([1,2,3,4,5],2)
console.log("chnked array by solution 1 is----->", result1)

/*--------------------------------------------------------*/

/*solution 2 */

/**
 *  step1 -> create an empty array to hold chunks called chunked
 * step2 -> create an index start at 0
 * step3 -> while index < array length
 * step4 ->     push a slice of length size from array into 'chunked'
 * step5 ->     add size to index
 */
function chunk2(array, size) {
    const chunked = [];
    let index = 0;
  
    while (index < array.length) {
      chunked.push(array.slice(index, index + size));
      index += size;
    }
  
    return chunked;
  }
  var result2 = chunk1([1,2,3,4,5,6,7],3)
console.log("chnked array by solution 1 is----->", result2)