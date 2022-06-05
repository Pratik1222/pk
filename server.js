const exp = require("express");
const app = exp();
const userapp = require("./Apis/userapi");

require("dotenv").config();

const mongoose = require("mongoose");
const path = require("path");

// connect express server with react
app.use(exp.static(path.join(__dirname, "./build")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

mongoose
  .connect("mongodb+srv://Pratik:Marval@cluster0.dfsgj.mongodb.net/Books?retryWrites=true&w=majority")
  .then(() => console.log("database is connected successfully"))
  .catch((err) => console.log("err is", err));

app.use("/user", userapp);

const port = 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));
