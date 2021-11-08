const express = require("express");
const services = require("./data/services");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/services", (req, res) => {
  res.json(services);
});

app.get("/api/services/:slug", (req, res) => {
  const service = services.services.find((s) => s.slug === req.params.slug);
  res.json(service);
});

const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
