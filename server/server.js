const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/tasks");
const authRouter = require("./routes/auth.route");
const connectDB = require("./db/db");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();
const PORT = process.env.PORT || 5000;

app.use(router);
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Servet is running on the ${PORT}`);
});
