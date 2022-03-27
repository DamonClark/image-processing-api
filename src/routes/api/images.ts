import express from 'express';
import imageProcess from '../../utilities/imageProcess';

const images = express.Router();

images.get('/', imageProcess, (req, res) => {
    res.sendFile('/Users/damonclark/Desktop/Udacity/image-processing-api/assetts/thumb/fjord.jpeg');
});

export default images;