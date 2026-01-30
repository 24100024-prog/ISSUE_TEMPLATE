const express = require("express");
const app = express();

const searchRoutes = require("./routes/searchRoutes");

app.use("/api/secondchance/search", searchRoutes);

module.exports = app;
