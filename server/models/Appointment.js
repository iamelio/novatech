import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  reason: { type: String },
  status: { type: String, enum: ["Pending","Accepted","Declined"], default: "Pending" }
}, { timestamps: true });

export default mongoose.model("Appointment", appointmentSchema);
