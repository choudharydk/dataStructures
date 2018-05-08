/* solution 1 */

/**
 * step1 -> for 0 to n
 * step2 ->   create an empty string 'stair'
 * step3 ->     for 0 to n
 * step4 ->         if current column <= current row 
 * step5 ->           add '#' to 'stair'
 * step6 ->         else
 * step7 ->           add space to 'stair'
 * step8 ->    console log the ''stair'
 */

function steps1(n) {
      for (let row = 0; row < n; row++) {
        let stair = '';
    
        for (let column = 0; column < n; column++) {
          if (column <= row) {
            stair += '#';
          } else {
            stair += ' ';
          }
        }
    
        console.log(stair);
      }
    }
steps1(10)
 /*--------------------------------------------------------*/

/*solution 2 */   
/**
 * step1 -> if 'row === n', then we have hit the end of the problem
 * step2 ->  if the stair string has a 'length === n', then we are at the end of the row
 * step3 ->      if the length of the stair string is <= row number we are working on then add '#' 
 *  step4 ->                else add space
 */

function steps2(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}
steps2(5);