function spinalCase(str) {
  const funcStr = str.trim();
  let startPos = 0;
  console.log(startPos + '\n');
  let endPos = null;
  let words = [];
  let finalStr = null;

  for (let i = 1; i < funcStr.length;i++) {
    if (funcStr[i] === '_' || funcStr[i] === ' ' || /[A-Z]/.test(funcStr[i]) )     {
        endPos = i;
        console.log(endPos);
        // console.log (funcStr.slice(startPos, endPos))
        words.push( funcStr.slice(startPos, endPos) );
    };
    if (funcStr[i] === '_' || funcStr[i] === ' ') {
      startPos = i + 1;
      i++;
    } else if ( /[A-Z]/.test(funcStr[i]) ) {
      startPos = i;
    }
  }

  words.push( funcStr.slice(startPos) );

  finalStr = words.join('-').toLowerCase();

  console.log(finalStr);
  return finalStr;
}

spinalCase('This Is Spinal Tap');