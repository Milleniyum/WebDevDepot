const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  title: { type: String, required: true },
  main: { type: Boolean, default: true },
  order: { type: Number, required: true, default: 1000 },
  resources: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resource"
    }
  ]
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
