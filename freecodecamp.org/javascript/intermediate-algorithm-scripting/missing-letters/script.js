// Missing letters

// Find the missing letter in the passed 
// letter range and return it.

// If all letters are present in the range, 
// return undefined.

function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  if ( alphabet.includes(str) ) {
    return undefined;
  }

  const position = alphabet.indexOf(str[0]);
  const partForComp = alphabet.substr(position, str.length);

  console.log(position);
  console.log(partForComp + '\n');

  for (let i = 0; i < str.length; i++) {
    console.log(partForComp[i]);

    if (str[i] !== partForComp[i]) {
      console.log('\n' + partForComp[i]);
      return partForComp[i];
    }
  }

}

// fearNotLetter("abce");
fearNotLetter("stvwx");