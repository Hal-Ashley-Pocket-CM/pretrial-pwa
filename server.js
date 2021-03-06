const express = require("express");
const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
const path = require("path");
// dotenv.config({ debug: process.env.DEBUG });
// const mongoose = require("mongoose"); MYSQL DB INSTEAD
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
const routes = require("./routes");
app.use(routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"), function(
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use(express.static("public"));
}

console.log(process.env);
app.listen(PORT, function() {
  console.log(
    `🌎 ==> API Server now listening on PORT http//localhost:${PORT}`
  );
});
