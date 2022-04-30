// Search and Replace
// Perform a search and replace on the sentence 
// using the arguments provided and return the 
// new sentence.
//
// First argument is the sentence to perform 
// the search and replace on.
//
// Second argument is the word that you 
// will be replacing (before).
//
// Third argument is what you will be replacing 
// the second argument with (after).
//
// Note: Preserve the case of the first character 
// in the original word when you are replacing it. 
// For example if you mean to replace the word 'Book' 
// with the word 'dog', it should be replaced as 'Dog'

function myReplace(str, before, after) {
  const startPos = searchStartPos(str, before);
  const wordForInsert = wordTransform(after, before);
  const cutedStr = cutTheWord(str, startPos, before.length);
  const replacedStr = insertNewWord(cutedStr, startPos, wordForInsert);

  // console.log('Original string: ' + str);
  // console.log('Word for replacing: ' + before);
  // console.log('Word for inserting: ' + after);
  // console.log('Position of the inserting word: ' + startPos);
  // console.log('Transformed inserting word: ' + wordForInsert);
  // console.log('String without replacing word: ' + cutedStr);
  // console.log('String with inserted word: ' + replacedStr);

  return replacedStr; 
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

function searchStartPos(str, word) {
  const position = str.indexOf(word);

  return position;
}

function wordTransform(word, example) {
  // console.log(word);
  const transWord = /^[a-z]/.test(example) ?
      word[0].toLowerCase() + word.slice(1)
    : word[0].toUpperCase() + word.slice(1);
  
  return transWord;
}

function cutTheWord(str, startPos, length) {
  const firstPart = str.slice(0, startPos);
  const startPosForSecPart = startPos + length;
  const secondPart = str.slice(startPosForSecPart); 
  const cutedStr =  firstPart + secondPart;

  return cutedStr;
}

function insertNewWord(str, pos, word) {
  const firstPart = str.slice(0, pos);
  const secondPart = str.slice(pos); 
  const insertedStr =  firstPart + word + secondPart;

  return insertedStr;
}