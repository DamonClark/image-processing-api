"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
describe("Hello World Server", function () {
    it('expect /api to be status 200', function () {
        app.get('/api', function (req, res) {
            expect(res.statusCode).toBe(200);
        });
    });
    it('expect /api to return hello world', function () {
        app.get('/api', function (req, res, body) {
            expect(body).toBe("Hello, world!");
        });
    });
    it('expect /api/images to return image', function () {
        app.get('/api/images', function (req, res, body) {
            expect(body).toContain("/Users/damonclark/Desktop/Udacity/image-processing-api/assetts/full/fjord.jpeg");
        });
    });
});
