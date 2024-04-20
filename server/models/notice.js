import mongoose from "mongoose";

const noticeSchema = mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  noticeFor: {
    type: String,
    required: true,
  },
  checkboxValue: {
    type: Boolean,
    default: false, // Default value for the checkbox
  }
});

export default mongoose.model("notice", noticeSchema);
