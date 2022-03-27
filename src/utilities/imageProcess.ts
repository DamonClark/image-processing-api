import fs from 'fs'
import sharp from 'sharp';

const fullpath = '/Users/damonclark/Desktop/Udacity/image-processing-api/assetts/full/'
const thumbpath = '/Users/damonclark/Desktop/Udacity/image-processing-api/assetts/thumb/'

async function imageProcess(filename: string, width: string, height: string) {
	if (fs.readdirSync(fullpath).length === 0) {
		console.log("no file exists")
	} else {
		const image = sharp(fullpath + filename + ".jpeg");
		image
			.metadata()
			.then(function() {
				return image
					.resize(Number(width), Number(height))
					.webp()
					.toBuffer();
			})
			.then(function() {
				return image
			});
	}
}

export default imageProcess