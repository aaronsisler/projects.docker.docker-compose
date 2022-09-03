"use strict";

const express = require("express");
const axios = require("axios").default;

// Constants
const EXPOSED_PORT = 8080;
const PRIVATE_PORT = 9090;
const HOST = "0.0.0.0";
const PRIVATE_APP_HOST = "private-app";

// App
const app = express();
app.get("/", async (_req, res) => {
  try {
    res.send("Health endpoint");
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

app.get("/call-internal", async (_req, res) => {
  try {
    console.log(PRIVATE_APP_HOST);
    const internalResponse = await axios.get(
      `http://${PRIVATE_APP_HOST}:${PRIVATE_PORT}`
    );
    res.send(internalResponse.data + " A little something exposed...");
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

app.listen(EXPOSED_PORT, HOST);
console.log(`Running on http://${HOST}:${EXPOSED_PORT}`);
