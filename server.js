// Steps
// npm init -y to intialize library
// npm i express jsonwebtoken dotenv
// npm i --save-dev nodemon (atutomaiclay refreshes server when changes are applied)
// Make server.js, initialize express = requrie('express') and app = express() to use express
// Express is a light web application framework for Node.js, it provides a robust set of features for handling HTTP requests, 
// routing, middleware, and more.
//Make a request.rest and install REST client to be able to make Http request and get a response.

const express = require("express");
const app = express();

const posts = [
  {
    username: "Juan",
    title: "Post1",
  },
  {
    username: "Baltzar",
    title: "Post2",
  }
];

app.get('/posts', (req, res) => {
  res.json(posts)
})

app.listen(3000);