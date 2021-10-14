const bcrypt = require("bcrypt");

const password = "1234Segura!";

// The console would give us a different password each time
bcrypt.hash(password, 5, function (err, hash) {
  console.log(hash); //$2b$05$l.gaTPf0lyF0OTlUHm2AWuifloOMIgqLs822c3Lp4KrouVpm1pTli
  //to evaluate password
  bcrypt.compare(password, hash, function (err, res) {
    console.log(err); //undefined
    console.log(res); //true
  });
});
