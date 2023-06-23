const express = require("express");
const app = express();
const multer = require("multer");
const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});

const upload = multer({ storage: fileStorage });

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  console.log(req.file);
  res.send("Single File upload success");
});
