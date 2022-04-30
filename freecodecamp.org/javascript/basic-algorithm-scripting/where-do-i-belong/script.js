function getIndexToIns(arr, num) {
    if (arr === []) {
        return 0;
    }
    
    for (let i = arr.length -1; i >= 0; i--) {
      let indexOfElem = i;
      let lowestNumber = arr[i];
  
      for (let j = 0; j < i; j++) {
        if (arr[j] <= lowestNumber) {
          lowestNumber = arr[j];
          indexOfElem = j;
        }
      }
  
      arr.splice(indexOfElem, 1);
      arr.push(lowestNumber);
    }
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
        console.log(i);
        return i;
      }
    }
  
    return arr.length;
}

getIndexToIns([40, 60], 50);