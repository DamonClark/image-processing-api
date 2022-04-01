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
  const imagesize = width + "*" + height;
  if (!fs.existsSync(thumbpath)) {
    fs.mkdir(thumbpath, (err) => {
      if (err) {
        return console.error(err);
      }
    });
  }
  if (fs.readdirSync(fullpath).length === 0) {
    res.send("No file found");
  } else if (filename == "" || width == "" || height == "") {
    res.send("Missing filename, height or width.");
  } else if (filename.match(/^[a-zA-Z_-]+$/) == null) {
    res.send("Invalid input for filename");
  } else if (fs.readdirSync(thumbpath).toString().includes(imagesize)) {
    res.send("image with same dimensions was resized earlier");
  } else {
    imageProcess(filename, width, height).then(function () {
      const mimeType = "image/png"; // e.g., image/png
      res.contentType(mimeType);
      res.sendFile(thumbpath + filename + "_" + width + "*" + height + ".jpeg");
    });
  }
});

export default images;
