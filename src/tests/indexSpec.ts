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

  it('expect /api/images to be status 200', () => {
    app.get('/api/images', (req, res) => {
      expect(res.statusCode).toBe(200);
    });
  });

  it('expect image transform to not throw an error', () => {
    app.get('/api/images?filename=encenadaport&width=400&height=400', (req, res) => {
      expect(res.statusCode).toBe(200);
    });
  });
});