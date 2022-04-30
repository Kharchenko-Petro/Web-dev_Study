// Steamroller

// Flatten a nested array. You must account 
// for varying levels of nesting.

function steamrollArray(arr, d = Infinity) {
  return (d > 0) ? 
              arr.reduce( (acc, val) => 
                acc.concat( Array.isArray(val) ? 
                                            steamrollArray(val, d - 1) 
                                            : val), []) 
              : arr.slice();
}

console.log( steamrollArray([1, [2], [3, [[4]]]]) );