const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  position: { type: Number, required: true},
  level: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String },
  source: {type: String},
  resources: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resource"
    }
  ]
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
