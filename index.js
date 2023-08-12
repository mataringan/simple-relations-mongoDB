const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRouters = require("./src/routes/index");

const app = express();
app.use(bodyParser.json());
app.use("/", apiRouters);
// Use the cors middleware before defining your routes
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://mataringan:kurakura@project.g6xldrk.mongodb.net/ngaos?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(9000, () => {
      console.log("Connection Success");
    });
  })
  .catch((err) => console.log(err));
