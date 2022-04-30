// Convert HTML Entities

// Convert the characters &, <, >, " (double quote), 
// and ' (apostrophe), in a string to 
// their corresponding HTML entities.

function convertHTML(str) {
  const symbForReplace = /[&,<,>,",']/g;
  
  const resultStr = str.replace(symbForReplace, symb => {
    switch (symb) {
      case '&':
        return '&amp;';
        break;
      case '<':
        return '&lt;';
        break;
      case '>':
        return '&gt;';
        break;
      case '"':
        return '&quot;';
        break;
      case "'":
        return '&apos;';
        break;
    }
  });

  console.log(resultStr);
  return resultStr;
}

convertHTML("Hamburgers < Pizza < Tacos");