import express from "express";
import imageProcess from "../../utilities/imageProcess";
import fs from "fs";

const images = express.Router();
const fullpath =
  "/Users/damonclark/Desktop/Udacity/image-processing-api/assetts/full/";
const thumbfile =
  "/Users/damonclark/Desktop/Udacity/image-processing-api/assetts/thumb/";

images.get("/", (req, res) => {
  const filename = req.query.filename as string;
  const width = req.query.width as string;
  const height = req.query.height as string;
  if (fs.readdirSync(fullpath).length === 0) {
    res.send("No file found");
  } else {
    imageProcess(filename, width, height).then(function () {
      const mimeType = "image/png"; // e.g., image/png
      res.contentType(mimeType);
      res.sendFile(thumbfile + filename + "_thumb.jpeg");
    });
  }
});

export default images;
