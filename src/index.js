const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandling");
const connectToDB = require("./config/db.config");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ message: "ok" });
});
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server started a PORT: ${PORT}`);
  await connectToDB();
  console.log("Database successfully connected");
});
