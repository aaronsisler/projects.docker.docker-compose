"use strict";

const express = require("express");
const axios = require("axios").default;

// Constants
const EXPOSED_PORT = 8080;
const PRIVATE_PORT = 9090;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", async (_req, res) => {
  const internalResponse = await axios.get(`http://${HOST}:${PRIVATE_PORT}`);
  console.log(internalResponse.data);
  res.send(internalResponse.data);
  // res.send("Hello World From Exposed!");
});

app.listen(EXPOSED_PORT, HOST);
console.log(`Running on http://${HOST}:${EXPOSED_PORT}`);
