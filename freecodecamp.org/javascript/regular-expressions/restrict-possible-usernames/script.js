let username = "JackOfAllTrades";
let userCheck = 
/(^[a-z]+\D$)|(^[a-z]+\w\d+$)/i; // Change this line
let result = userCheck.test(username);