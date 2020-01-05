const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  username: { type: String, required: true },
  content: { type: String },
  timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
