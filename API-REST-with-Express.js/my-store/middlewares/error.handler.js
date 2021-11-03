//global middleware error

function logErrors(err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  //very useful if we want to make error tracking in one place, e.g. incorporate error systems like Sentry
  next(err); //middleware type error
}

//detect errors and create format to send to client
function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  //don't want to go to next middleware, if there is an error send error message
  res.status(500).json({
    message: err.message,
    stack: err.stack,
    //stack to know where error ocurred
  });
}

//boom
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    // if boom property exists => error is type boom
    const { output } = err;
    //don't go to next middleware
    //dynamic status code
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
