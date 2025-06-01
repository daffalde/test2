import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("halo");
});

app.listen(8000);
