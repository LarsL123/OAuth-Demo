const login = require("./authentication/issueToken");
const express = require("express");

module.exports = (app) => {
  app.use("/api/login", express.json());
  app.use("/api/login", login);
};
