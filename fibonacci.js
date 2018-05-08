/* solution 1 */

function fib1(n) {
    if (n < 2) {
      return n;
    } 
    return fib1(n - 1) + fib1(n - 2);
  }
  
  var result1 = fib1(6);
  console.log("nth term in febonacci series by solution 1 is----->", result1)
  /*--------------------------------------------------------*/
  
  /* solution 2 */
  
  function fib2(n) {
    const result = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      const a = result[i - 1];
      const b = result[i - 2];
  
      result.push(a + b);
    }
  
    return result;
  }

  var result2 = fib2(6);
  console.log(" febonacci series by solution 2 is----->", result2)

  /*--------------------------------------------------------*/
  
  /* solution 3 */

  function memoize(fn) {
    const cache = {};
    return function(...args) {
      if (cache[args]) {
        return cache[args];
      }
  
      const result = fn.apply(this, args);
      cache[args] = result;
  
      return result;
    };
  }
  
  function slowFib(n) {
    if (n < 2) {
      return n;
    }
  
    return fib(n - 1) + fib(n - 2);
  }
  
  const fib = memoize(slowFib);

  var result3 = slowFib(6);
  console.log(" febonacci series by memoization by solution 3 is----->", result3)


  


