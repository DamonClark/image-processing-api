import fs from 'fs'
import sharp from 'sharp';

const fullpath = '/Users/damonclark/Desktop/Udacity/image-processing-api/assetts/full/'
const thumbpath = '/Users/damonclark/Desktop/Udacity/image-processing-api/assetts/thumb/'

async function imageProcess() {
	if (fs.readdirSync(fullpath).length === 0) {
		console.log("no file exists")
	} else {
		const image = sharp(fullpath).resize(200, 200)
		fs.writeFile(thumbpath, image.toString(), function(error) {
			if (error) {
				console.error("write error:  " + error.message);
			} else {
				console.log("Successful Write to " + thumbpath);
			}
		})
	}
}

export default imageProcess