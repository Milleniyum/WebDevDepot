const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  level: { type: Number, required: true },
  order: { type: Number, required: true},
  title: { type: String, required: true },
  resources: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resource"
    }
  ]
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
