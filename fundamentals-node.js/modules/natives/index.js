const myAddon = require("./build/Release/addon"); //as I named it in binding.gyp

console.log(myAddon); //{ hello: [Function: hello] }
console.log(myAddon.hello()); //world
