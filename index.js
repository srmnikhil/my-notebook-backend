const connectToMongo = require("./db");
require('dotenv').config();
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

const port = process.env.PORT||5000;
app.listen(port, () => {
  console.log(`myNotebook listening on port ${port}`);
})