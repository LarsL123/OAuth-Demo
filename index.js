const express = require("express");
const config = require("config");
const app = express();

require("./frontend/index")(app);
require("./backend/index")(app);

app.listen(config.get("appPort"));
