const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ message: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server started a PORT: ${PORT}`);
});
