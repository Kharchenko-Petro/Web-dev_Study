function findOdd(numbers) {
  let number = numbers[0];
  let times = null;
  
  for (let i = numbers.length - 1; i >= 0; i--) {
    let time = 1;

    for (let j = i - 1; j >= 0; j--) {
      if (numbers[i] === numbers[j]) {
        time++;
        numbers.splice(j, 1);  
        i--;
      }
    }
    
    if (time > times && time % 2 !== 0) {
      number = numbers[i];
      times = i;
    }

    numbers.pop();
  }
  
  return number;
}

findOdd([ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ]);