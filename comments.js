// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for /comments
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
```

We can run the web server by executing the following command:

```bash
node comments.js
```

Then, we can visit the web server at http://localhost:3000/comments.

## Express Router

In the previous example, we created a route for /comments. However, as the application grows, the number of routes will also grow. To better organize the routes, we can use the `express.Router` class to create a router for a group of routes.

For example, we can create a router for the comments routes as follows:

```javascript
// Path: comments.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a router for comments
const commentsRouter = express.Router();

// Define a route for /comments
commentsRouter.get('/', (req, res) => {
  res.send('This is the comments page');
});

// Use the router for the /comments route
app.use('/comments', commentsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
```

In this example, we created a router for the comments routes using `express.Router`. We then defined a route for /comments using `commentsRouter.get`. Finally, we used the router for the /comments route using `app.use`.

## Middleware

In Express, middleware are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

Middleware can be used to perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

For example, we can create a middleware function to log the request URL