const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  entryId: {
    type: Number,
  },
  userName: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
  },
  dateSent: {
    type: Date,
    default: new Date(),
  },
});
module.exports = mongoose.model("Entry", EntrySchema);
