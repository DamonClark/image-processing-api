import express from 'express';
const images = express.Router();

images.get('/', (req, res) => {
    res.send('Hello Images')
});

export default images;