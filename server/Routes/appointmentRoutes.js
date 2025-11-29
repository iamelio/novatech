import express from "express";
import {
  createAppointment, getMyAppointments, getAllAppointments, updateStatus
} from "../controllers/appointmentController.js";
import { verifyToken, verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", verifyToken, createAppointment);
router.get("/my", verifyToken, getMyAppointments);
router.get("/all", verifyToken, verifyAdmin, getAllAppointments);
router.put("/:id", verifyToken, verifyAdmin, updateStatus);

export default router;
