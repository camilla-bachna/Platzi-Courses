const express = require('express');
const cors = require('cors');
const routerApi = require('./routes'); //search automatically for index.js
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express(); //method that will create app
const port = process.env.PORT || 3000; //where we want our app to run on (3000, 3005) This app starts a server and listens on port 3000 for connections.

app.use(express.json());

const whitelist = ['http://127.0.0.1:5500', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      //if the origin is in whitelist I let it pass and execute callback
      //no error and access allowed
      callback(null, true);
    } else {
      //otherwise return error
      callback(new Error('No permitido'));
    }
  },
};
app.use(cors(options));

//define default route
app.get('/', (req, res) => {
  //callback with 2 parameters which will execute the response we send to the client
  res.send('Hello, my express server!');
});
//The app responds with "Hello, my express server!" for requests to the root URL (/) or route.

app.get('/new-route', (req, res) => {
  res.send('Hello, I am a new route or end point!');
});

app.get('/home', (req, res) => {
  res.send('Aquí encontrarás nuestra página principal!');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//we tell the app which port to listen on
//we also create a callback that will let us know when it is running
app.listen(port, () => {
  console.log(`Listening at port http://localhost:${port}`);
});
