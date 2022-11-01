import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About us");
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
