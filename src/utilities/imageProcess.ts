import fs from "fs";
import sharp from "sharp";

const fullpath =
  "/Users/damonclark/Desktop/Udacity/image-processing-api/assetts/full/";
const thumbpath =
  "/Users/damonclark/Desktop/Udacity/image-processing-api/assetts/thumb/";

async function imageProcess(filename: string, width: string, height: string) {
  if (fs.readdirSync(fullpath).length === 0) {
    return console.log("no file exists");
  } else {
    const image = sharp(fullpath + filename + ".jpeg");
    await image.metadata().then(function () {
      return image
        .resize(Number(width), Number(height))
        .webp()
        .toFile(thumbpath + filename + "_thumb.jpeg");
    });
    return image;
  }
}

export default imageProcess;
