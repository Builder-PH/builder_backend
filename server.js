const express = require("express");
const services = require("./data/services");

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

app.listen(5000, console.log("Server running on port 5000"));
