function confirmEnding(str, target) {
  let compareString = str.slice(str.length - target.length, str.length);
            
  if (compareString === target) {
    return true;
  }

  return false;
}

confirmEnding("Bastian", "n")
