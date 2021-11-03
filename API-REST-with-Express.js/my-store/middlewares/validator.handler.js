const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  //return a function with a middleware format => we create a middleware dynamically
  return (req, res, next) => {
    //where the information comes (POST, GET, PATCH) from depends on request we handle => we have to make it dynamic
    const data = req[property];
    /*if POST => body
    req.body;
    if GET => params
    req.params;
    req.query; */
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      //error status 400, info that we get send is not good
      //this is an error => check middleware that processes errors => will see that its type boom
      next(boom.badRequest(error));
    }
    //if there is no error
    next();
  };
}

module.exports = validatorHandler;
