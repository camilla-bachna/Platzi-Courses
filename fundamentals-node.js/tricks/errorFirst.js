function async(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a); //if everything works out, error will be null and the value will be a
    } catch (e) {
      //if something breaks, we take the error
      callback(e, null); //the other parameters will be undefined, we could e.g. add null
    }
  }, 1000);
}

/* try {
  async(function (err, data) {
    if (err) {
      throw err;
    }
    //  throw err; ReferenceError: z is not defined at Timeout._onTimeout ... app crashes doesnt finish execution

    console.log("Todo ha ido bien, mi data es", data);
  });
} catch (e) {
  console.error("Hemos capturado un error");
  console.log(e);
} */
//THIS DOES NOT WORK => app crashed, because we entered an async function => thats why we always have to follow pattern error first callback
//throw works fine with synchronous functions, but not async

async(function (err, data) {
  //first check if there is an error, in that case stop execution and catch error
  if (err) {
    //if there is no error would be null, is false
    console.error("Tenemos un error");
    console.error(err);
    return false; //best practice: stop execution of function
  }

  console.log("Todo ha ido bien, mi data es", data);
});

/* Tenemos un error
  ReferenceError: z is not defined
      at Timeout._onTimeout ... */
