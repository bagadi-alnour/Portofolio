const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT || 5000;

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const contact = require("./Routes/contact");
const expandEdu = require("./Routes/expAndEdu");
const projects = require("./Routes/projects");
const admin = require("./Routes/admn");
app.use("/api/expandedu", expandEdu);
app.use("/api/admin", admin);
app.use("/api/contact", contact);
app.use("/api/projectslist", projects);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
