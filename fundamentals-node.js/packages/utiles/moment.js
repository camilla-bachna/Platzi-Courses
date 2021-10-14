const moment = require("moment");

let now = moment();
console.log(now); //Moment<2021-10-14T11:20:32+02:00>
console.log(now.toString()); //Thu Oct 14 2021 11:23:11 GMT+0200

//to format date
console.log(now.format("YYYY/MM/DD - HH:mm")); //2021/10/14 - 11:24
