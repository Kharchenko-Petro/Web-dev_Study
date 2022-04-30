// Roman Numeral Converter

// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// convertToRoman(2) should return the string II.
// convertToRoman(3) should return the string III.
// convertToRoman(4) should return the string IV.
// convertToRoman(5) should return the string V.
// convertToRoman(9) should return the string IX.
// convertToRoman(12) should return the string XII.
// convertToRoman(16) should return the string XVI.
// convertToRoman(29) should return the string XXIX.
// convertToRoman(44) should return the string XLIV.
// convertToRoman(45) should return the string XLV.
// convertToRoman(68) should return the string LXVIII
// convertToRoman(83) should return the string LXXXIII
// convertToRoman(97) should return the string XCVII
// convertToRoman(99) should return the string XCIX
// convertToRoman(400) should return the string CD
// convertToRoman(500) should return the string D
// convertToRoman(501) should return the string DI
// convertToRoman(649) should return the string DCXLIX
// convertToRoman(798) should return the string DCCXCVIII
// convertToRoman(891) should return the string DCCCXCI
// convertToRoman(1000) should return the string M
// convertToRoman(1004) should return the string MIV
// convertToRoman(1006) should return the string MVI
// convertToRoman(1023) should return the string MXXIII
// convertToRoman(2014) should return the string MMXIV
// convertToRoman(3999) should return the string MMMCMXCIX

function convertToRoman(num) {
  const invRomDigArr = num.toString().split('');

  const romArr = invRomDigArr.map( (value, index) => 
    arabToRom(value, (invRomDigArr.length - index)) );
  
  return romArr.join('');
}
 
convertToRoman(36);

function argsForConv(digit) {
  const arabNumSymb = ['I', 'V', 'X', 'L', 'C', 'D', 'M', '', ''];

  if (digit === 1) {
    return arabNumSymb.splice(0, 3);
  }

  return arabNumSymb.splice(digit, 3);

  switch (digit) {
    case 1 :
      return ['I', 'V', 'X'];
    case 2 :
      return ['X', 'L', 'C'];
    case 3 :
      return ['C', 'D', 'M'];
    case 4 :
      return ['M', '', ''];
   }
 }

function arabToRom(num, digit) {
  const argsArr = argsForConv(digit);

  const a = argsArr[0];
  const b = argsArr[1];
  const c = argsArr[2];

  switch (num) {
    case '1' :
      return a;
    case '2' :
      return a + a;
    case '3' :
      return a + a + a;
    case '4' :
      return a + b;
    case '5' :
      return b;
    case '6' :
      return b + a;
    case '7' :
      return b + a + a;
    case '8' :
      return b + a + a + a;
    case '9' :
      return a + c;
    default :
      return '';
    
  }
}

