const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Deep Learning Mode 🚀");
});

app.listen(1627, () => {
  console.log("Server running on port 1627");
});
