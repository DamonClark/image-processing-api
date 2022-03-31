import fs from "fs";
import path from "path";
import sharp from "sharp";

const fullpath = path.join(__dirname + "../../../assetts/full/");
const thumbpath = path.join(__dirname + "../../../assetts/thumb/");

async function imageProcess(
  filename: string,
  width: string,
  height: string
): Promise<void> {
  if (fs.readdirSync(fullpath).length === 0) {
    return console.log("no file exists");
  } else {
    const image = sharp(fullpath + filename + ".jpeg");
    await image.metadata().then(async function () {
      return await image
        .resize(Number(width), Number(height))
        .webp()
        .toFile(thumbpath + filename + "_thumb.jpeg");
    });
  }
}

export default imageProcess;
