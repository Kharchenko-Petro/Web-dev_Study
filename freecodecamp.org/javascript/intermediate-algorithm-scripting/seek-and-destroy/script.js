// Seek and Destroy

// You will be provided with an initial array 
// (the first argument in the destroyer function), 
// followed by one or more arguments. Remove 
// all elements from the initial array that are 
// of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr) {
  let destArr = [...arr];
  for (let i = 1; i < arguments.length; i++) {
    destArr = destArr.filter( item => arguments[i] !== item);

    console.log(arguments[i]);
    console.log(arr);
  }

  return destArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);