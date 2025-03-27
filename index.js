const connectToMongo = require("./db");
const express = require('express');
const cors = require('cors');
connectToMongo();

const app = express();

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));
app.use("/", (
  req, res) => {
  res.send("Hello World")}
);

const port = process.env.PORT||5000;
app.listen(port, () => {
  console.log(`myNotebook listening on port ${port}`);
})