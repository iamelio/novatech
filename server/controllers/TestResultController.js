// import testResult from "../models/testResult.js";
import testResult from "../models/testResult.js";

// admin uploads for userId in params
export const uploadResult = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
    const tr = await testResult.create({
      userId,
      fileName: req.file.filename,
      filePath: req.file.path,
      uploadedBy: req.userId,
      status: "Received"
    });
    res.status(201).json(tr);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed" });
  }
};

// user fetch own results
export const getUserResults = async (req, res) => {
  try {
    const results = await testResult.find({ userId: req.userId }).sort({ uploadedAt: -1 });
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed" });
  }
};
