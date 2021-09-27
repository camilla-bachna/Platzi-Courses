console.log("Hola a todos");
//Number
//Explicito
var phone;
phone = 1;
phone = 54267891;
//phone = "+34 54267891"; //Error Type 'string' is not assignable to type 'number'.
//Inferido - given
var phoneNumber = 54267891;
phoneNumber = 123;
//phoneNumber = true; //Error Type 'boolean' is not assignable to type 'number'.
//valores hexadecimales
var hex = 0xf00d; //after 0x we can use 0 to 9 and a b c d e f
//valores binarios
var binary = 10; //0b indicates that a binary value follows, only 0 and 1
//valores octales
var octal = 484; //0o indicates octal value and digits between 0 and 7
//Boolean
//Explicito
var isPro; //to indicate if a user that publishes photos is pro or not (has a license)
isPro = true;
//isPro = 1; //Error Type 'number' is not assignable to type 'boolean'.
//Inferido
var isUserPro = false;
isUserPro = true;
//isUserPro = 1; //Error Type 'number' is not assignable to type 'boolean'.
//String
var username = "Camilla";
username = "Luis";
//username = true; //Type 'boolean' is not assignable to type 'string'.
//Template string
//Backtick `
var userinfo;
userinfo = "\n    User Info:\n    username: " + username + "\n    name: " + (username + " " + "Bachna") + "\n    phone: " + phoneNumber + "\n    isPro: " + isPro + "\n";
console.log("userInfo", userinfo);
