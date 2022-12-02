// create a server
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// create a route for the app
app.get("/", (req, res) => res.send("Hello World!"));

// create a route to post and get the request body
app.post("/post", (req, res) => {
  console.log(req.body);
  res.send("Got a POST request");
});

app.post("/", (req, res) => res.send("Got a POST request"));
