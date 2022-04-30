// DNA Pairing
// The DNA strand is missing the pairing element. 
// Take each character, get its pair, and return 
// the results as a 2d array.

// Base pairs are a pair of AT and CG. 
// Match the missing element to the provided character.

// Return the provided character as 
// the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up 
// in an array, and all the arrays are grouped 
// into one encapsulating array.

function pairElement(str) {
  const elemArr = str.split('');
  elemArr.forEach( (elem, index) => {
    switch (elem) {
      case 'A': 
        elemArr[index] = ["A","T"];
        break;
      case 'T':
        elemArr[index] = ["T","A"];
        break;
      case 'C':
        elemArr[index] = ["C","G"];
        break;
      case 'G':
        elemArr[index] = ["G","C"];
        break;
    }
  });

  console.log(elemArr);
  return elemArr;
}

pairElement("GCG");