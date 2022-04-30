function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  arr.push( ...collection.filter( item => {
    console.log(item);
    console.log(source);

    for (let key in source) {
      if (key in item) {
        console.log(source[key])
        console.log(item[key]);
        if (source[key] !== item[key]) {
          return false;
        } 
      } else {
          return false;
      }
    }

    return true;
  }) );

  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });