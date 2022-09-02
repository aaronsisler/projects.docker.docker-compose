"use strict";

const express = require("express");

// Constants
const PORT = 9090;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello World From Internal!");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
