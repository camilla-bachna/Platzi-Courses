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
  res.json([
    {
      name: 'Product 1',
      price: 1000,
    },
    {
      name: 'Product 2',
      price: 2000,
    },
    {
      name: 'Product 3',
      price: 3000,
    },
  ]);
});

app.get('/products/:id', (req, res) => {
  //I will pick up the id you are sending me and add it to the answer
  //id because thats how we added it /:id
  const id = req.params.id;
  //ES6 const {id} = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
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

app.get('/categories/:categoryId/article/:articleId', (req, res) => {
  const { categoryId } = req.params;
  const { articleId } = req.params;
  res.json({
    categoryId,
    category: 'Living room',
    subcategory: 'Furniture',
    articleId,
    article: 'Table',
  });
});

/* http://localhost:3000/categories/12/article/22
{
  "categoryId": "12",
  "category": "Living room",
  "subcategory": "Furniture",
  "articleId": "22",
  "article": "Table"
} */

app.get('/users', (req, res) => {
  res.json([
    {
      userName: 'Sofia',
      email: 'sofia.ejemplo@gmail.com',
      password: '123456',
    },
    {
      userName: 'Fernando',
      email: 'fernamdo.torres@gmail.com',
      password: 'Supersafe',
    },
  ]);
});

app.get(
  '/users/:userId/orders/:orderId/categories/:categoryId/articles/:articleId',
  (req, res) => {
    const { userId, orderId, categoryId, articleId } = req.params;
    res.json({
      user: 'Isabela',
      userId,
      order: 'Order 1',
      orderId,
      categoryId,
      category: 'Living room',
      subcategory: 'Furniture',
      articleId,
      article: 'Table',
    });
  }
);

/* http://localhost:3000/users/1/orders/2/categories/14/articles/32
{
  "user": "Isabela",
  "userId": "1",
  "order": "Order 1",
  "orderId": "2",
  "categoryId": "14",
  "category": "Living room",
  "subcategory": "Furniture",
  "articleId": "32",
  "article": "Table"
} */

//we tell the app which port to listen on
//we also create a callback that will let us know when it is running
app.listen(port, () => {
  console.log(`Listening at port http://localhost:${port}`);
});
