import mongoose from "mongoose";
const { Schema } = mongoose;
const subjectSchema = new Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  companyNumber: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  stipe d: {
    type: Number,
    default: 10,
  },
  year: {
    type: String,
    required: true,
  },
  ctc: {
    type: Schema.Types.ObjectId,
    ref: "attendence",
  },
});

export default mongoose.model("subject", subjectSchema);
