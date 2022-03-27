import express from 'express';
const app = express();

describe("Hello World Server", function() {

  it('expect /api to be status 200', () => {
    app.get('/api', (req, res) => {
      expect(res.statusCode).toBe(200);
    });
  });

  it('expect /api to return hello world', () => {
    app.get('/api', (req, res, body) => {
      expect(body).toBe("Hello, world!");
    });
  });

  it('expect /api/images to return image', () => {
    app.get('/api/images', (req, res, body) => {
      expect(body).toContain("/Users/damonclark/Desktop/Udacity/image-processing-api/assetts/full/fjord.jpeg");
    });
  });

});