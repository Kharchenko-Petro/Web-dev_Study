function lowercaseCount(str){
    if (str === "") return 0;

    let testRegex = /[a-z]/g; //How many?
    let result = str.match(testRegex).length;
    
    return result;
  }

  lowercaseCount("");