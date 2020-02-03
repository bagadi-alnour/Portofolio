const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String },
    link: { type: String },
    category: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const projects = mongoose.model("project", projectSchema);

module.exports = projects;
