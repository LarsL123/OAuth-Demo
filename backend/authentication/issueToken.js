//Docs at: https://www.polar.com/accesslink-api/?javascript--nodejs#authentication
const express = require("express");
const config = require("config");
const fetch = require("node-fetch");
const router = express.Router();

const apiEndpoint = config.get("authService.OAuthUrl");

const body = new URLSearchParams(); //Makes the x-www-form encoding readable.
body.append("grant_type", "authorization_code");
body.append("redirect_uri", config.get("authService.redirect_uri"));

router.post("/", async (req, res) => {
  if (!req.body.code) return res.status(404).send("code property is required");

  body.set("code", req.body.code);

  const response = await fetch(apiEndpoint, {
    method: "post",
    body: body.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json;charset=UTF-8",
      Authorization: config.get("authService.clientToken"),
    },
  });

  const json = await response.json();

  if (json.error) return res.status(404).send(json.error);

  // Usually the token is not sendt back to the client but i did in this demo.
  // The server should store the secret to request recources from the now accessable recource server.
  // I`ll leave that up to you so you can choose a database that fits your specific application needs.
  console.log(
    "Store user token and userID in a database: " + json.access_token
  );
  res.send(json.access_token);
});

module.exports = router;
