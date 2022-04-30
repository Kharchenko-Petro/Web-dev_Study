// Smallest Common Multiple
// Find the smallest common multiple of the provided 
// parameters that can be evenly divided by both, 
// as well as by all sequential numbers in the range 
// between these parameters.

// The range will be an array of two numbers that 
// will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest 
// common multiple of both 1 and 3 that is also evenly 
// divisible by all numbers between 1 and 3. 
// The answer here would be 6.

function smallestCommons(arr) {
    arr.sort( (a, b) => a - b );
    arr = range(arr[0], arr[1]);
    let remainder;
    let divided = arr[arr.length - 1];
    // let count = 1;
  
    while (true) {
      //-------------------------------------
      // console.log('[-------- while #' + count + ' -------]');
      //-------------------------------------
    //   count++;
      remainder = arr.reduce( (rem, item, index) => {
        //-------------------------------------
        // console.log('--- reduce #' + index + ' ---')
        // console.log('divided: ' + divided);
        // console.log('item: ' + item);
        // console.log('remain: ' + divided % item);
        //-------------------------------------
        return rem + divided % item;
      }, 0);
  
      if (remainder === 0) {
        return divided;
      }
  
      divided += 1;
    }
  }
  
  smallestCommons([1,5]);
  
  function range(startAt, endAt) {
    const size = endAt - startAt + 1;
    return [...Array(size).keys()].map(i => i + startAt);
  }