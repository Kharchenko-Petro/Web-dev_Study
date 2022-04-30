function countOnline(usersObj) {
    // Only change code below this line
    let onlineCounter = 0;
  
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        ++onlineCounter;
      }
    }
  
    return onlineCounter;
    // Only change code above this line
  }

countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } });