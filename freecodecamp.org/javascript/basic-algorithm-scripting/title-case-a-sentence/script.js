function titleCase(str) {
  let wordsReg = /[a-zA-Z']+/gi;
  let wordsOfStr = str.match(wordsReg);
  let transformedWords = [];
  let capitalizedWordsStr = '';

  for (let i = 0; i < wordsOfStr.length; i++) {
    let firstLetter = wordsOfStr[i][0].toUpperCase();
    let restLetters = wordsOfStr[i].slice(1, wordsOfStr[i].length).toLowerCase();
    transformedWords.push(firstLetter + restLetters);
  }
  
  capitalizedWordsStr = transformedWords[0];

  for (let i = 1; i < transformedWords.length; i++) {
    capitalizedWordsStr += ' ' + transformedWords[i];
  }

  return capitalizedWordsStr;
}

titleCase("I'm a little tea pot");