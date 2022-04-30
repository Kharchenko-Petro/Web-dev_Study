function onesCounter(input) {
  const arrOfOnes = [];
  
  const lastSum = input.reduce( (counter, number) => {
    if (number === 1) {
      return counter + number;
    } else {
      if (counter > 0) {
        arrOfOnes.push(counter);
      }
      
      return 0;
    }
  });
  
  if (lastSum > 0) {
    arrOfOnes.push(lastSum);
  }
  console.log(arrOfOnes);
  
  return arrOfOnes;
}

const result = onesCounter([1,1,1,1,1]);