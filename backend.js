// create a server
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// create a route to post and get the request body
app.post("/post", (req, res) => {
  console.log(req.body);
  res.send("Got a POST request");
});

//create a route to get the request body
app.get("/get", (req, res) => {
  console.log(req.body);
  res.send("Got a GET request");
});
