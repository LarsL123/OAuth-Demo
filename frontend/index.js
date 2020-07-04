const express = require("express");
const path = require("path");

module.exports = (app) => {
  app.use("/", express.static(path.join(__dirname, "public")));
  app.use("/auth", express.static(path.join(__dirname, "public", "auth.html")));
};
