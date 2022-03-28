import express from 'express';
import imageProcess from '../../utilities/imageProcess';

const images = express.Router();
const thumbfile = '/Users/damonclark/Desktop/Udacity/image-processing-api/assetts/thumb/'

images.get('/', (req, res) => {
    const filename = req.query.filename as string;
    const width = req.query.width as string;
    const height = req.query. height as string;
    imageProcess(filename, width, height).then(function() {
        const mimeType = 'image/png'; // e.g., image/png
        res.contentType(mimeType);
        res.sendFile(thumbfile + filename + '_thumb.jpeg')
    });
});

export default images;