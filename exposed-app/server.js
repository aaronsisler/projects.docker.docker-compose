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
  res.send(internalResponse.data);
});

app.listen(EXPOSED_PORT, HOST);
console.log(`Running on http://${HOST}:${EXPOSED_PORT}`);
