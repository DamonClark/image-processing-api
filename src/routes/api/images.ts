import express from 'express';
import imageProcess from '../../utilities/imageProcess';

const images = express.Router();

images.get('/', (req, res) => {
    const filename = req.query.filename as string;
    const width = req.query.width as string;
    const height = req.query. height as string;
    imageProcess(filename, width, height)
    res.send(imageProcess.toString());
      
});

export default images;