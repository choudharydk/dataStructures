/* solution 1 */

/**
 * step1 -> for 0 to n (iterates through rows)
 * step2 ->   create an empty string 'level'
 * step3 ->     for 0 to 2n-1 (columns)
 * step4 ->         if should have a # 
 * step5 ->           add '#' to 'level'
 * step6 ->         else
 * step7 ->           add space to 'level'
 * step8 ->    console log the 'level'
 */

function pyramid1(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}
pyramid1(3)
/*--------------------------------------------------------*/

/*solution 2 */  

 function pyramid2(n, row = 0, level = '') {
    if (row === n) {
      return;
    }
  
    if (level.length === 2 * n - 1) {
      console.log(level);
      return pyramid2(n, row + 1);
    }
  
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
      add = '#';
    } else {
      add = ' ';
    }
    pyramid2(n, row, level + add);
  }
  pyramid2(3)


