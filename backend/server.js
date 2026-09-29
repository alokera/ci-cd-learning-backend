const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from my CI/CD project 🚀"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK"
  });
});

app.get("/ci-cd", (req, res) => {
  res.json({
    status: "OK"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});