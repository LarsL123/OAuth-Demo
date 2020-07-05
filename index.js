const express = require("express");
const config = require("config");
const app = express();

if (config.get("authService.clientToken") == "CLIENT_AUTH_STRING")
  throw new Error("CLIENT_AUTH_STRING is not set");

require("./frontend/index")(app);
require("./backend/index")(app);

app.listen(config.get("appPort"));
