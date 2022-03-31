import fs from "fs";
import path from "path";
import express from "express";
import imageProcess from "../../utilities/imageProcess";

const images = express.Router();
const fullpath = path.join(__dirname + "../../../../assetts/full/");
const thumbpath = path.join(__dirname + "../../../../assetts/thumb/");

images.get("/", (req: express.Request, res: express.Response): void => {
  const filename = req.query.filename as string;
  const width = req.query.width as string;
  const height = req.query.height as string;
  if (fs.readdirSync(fullpath).length === 0) {
    res.send("No file found");
  } else {
    imageProcess(filename, width, height).then(function () {
      const mimeType = "image/png"; // e.g., image/png
      res.contentType(mimeType);
      res.sendFile(thumbpath + filename + "_thumb.jpeg");
    });
  }
});

export default images;
