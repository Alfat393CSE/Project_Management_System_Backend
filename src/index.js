import dotenv from "dotenv";
import express from "express";

dotenv.config({
  path: "./.env",
});

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello World`);
});

app.get("/instagram", (req, res) => {
  res.send(`this is an instagram page`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
