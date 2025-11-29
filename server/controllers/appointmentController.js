import Appointment from "../models/Appointment.js";

// user creates appointment
export const createAppointment = async (req, res) => {
  console.log("Received request to create appointment");
  try {
    const { date, time, reason } = req.body;
    const app = await Appointment.create({ userId: req.userId, date, time, reason });
    res.status(201).json(app);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Create failed" });
  }
};

// user fetch own
export const getMyAppointments = async (req, res) => {
  try {
    const apps = await Appointment.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed" });
  }
};

// admin fetch all
export const getAllAppointments = async (req, res) => {
  try {
    const apps = await Appointment.find().populate("userId", "name email").sort({ createdAt: -1 });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed" });
  }
};

// admin update status
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body; // Accepted / Declined
    const app = await Appointment.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(app);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};
