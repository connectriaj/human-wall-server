const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Human Wall server is working!");
});

app.listen(port, () => {
  console.log(`human wall server is running on port: ${port}`);
});
