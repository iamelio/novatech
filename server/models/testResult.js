import mongoose from "mongoose";

const testResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fileName: String,
  filePath: String,
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // admin id
  uploadedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ["Pending", "Received"], default: "Received" }
});

export default mongoose.model("testResult", testResultSchema);

