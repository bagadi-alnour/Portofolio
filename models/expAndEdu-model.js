const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expandEduSchema = new Schema(
  {
    dateStart: { type: Date, required: true },
    dateEnd: { type: Date, required: true },
    degree: { type: String, required: true },
    location: { type: String, required: true },
    establishment: { type: String, required: true },
    description: { type: String }
  },
  {
    timestamps: true
  }
);

const expandEdu = mongoose.model("expandedu", expandEduSchema);

module.exports = expandEdu;
