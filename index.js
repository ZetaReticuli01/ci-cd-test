const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Ultra pro max Learning Mode 🚀");
});
app.get("/about",(req,res)=>{
    res.send("This is about page")
})

app.listen(1627, () => {
  console.log("Server running on port 1627");
});
