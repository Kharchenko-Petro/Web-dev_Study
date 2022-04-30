function translatePigLatin(str) {
  if ( /^[aeoiu]/.test(str[0]) ) {
    return str.slice(0) + 'way';
  }

  if ( !/[aeoiu]/.test(str) ) {
    return str + 'ay';
  }
  
  return str.match(/[aeiou].*/) + str.match(/[^aeiou]*/) +'ay';
}

translatePigLatin("rhythm");