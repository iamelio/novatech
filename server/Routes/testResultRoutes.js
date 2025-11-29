import express from "express";
import { upload } from "../middleware/upload.js";
import { uploadResult, getUserResults } from "../controllers/TestResultController.js";
import { verifyToken, verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// admin uploads for a user
router.post("/:userId", verifyToken, verifyAdmin, upload.single("resultFile"), uploadResult);

// user gets own results
router.get("/mine", verifyToken, getUserResults);

export default router;
