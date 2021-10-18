//This app starts a server and listens on port 3000 for connections.
//The app responds with "Hello, my express server!" for requests to the root URL (/) or route.
const express = require('express');

const app = express(); //method that will create app
const port = 3000; //where we want our app to run on (3000, 3005)

//define default route
app.get('/', (req, res) => {
  //callback with 2 parameters which will execute the response we send to the client
  res.send('Hello, my express server!');
});

app.get('/new-route', (req, res) => {
  res.send('Hello, I am a new route or end point!');
});

//response in JSON format
app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000,
  });
});

app.get('/categories', (req, res) => {
  res.json([
    {
      category: 'Living room',
      subcategory: 'Lightning',
      article: 'Lamp',
    },
    {
      category: 'Living room',
      subcategory: 'Furniture',
      article: 'Table',
    },
    {
      category: 'Living room',
      subcategory: 'Rugs',
      article: 'Beige rug',
    },
    {
      category: 'Living room',
      subcategory: 'Decoration',
      article: 'Vase',
    },
  ]);
});

//we tell the app which port to listen on
//we also create a callback that will let us know when it is running
app.listen(port, () => {
  console.log(`Listening at port http://localhost:${port}`);
});
