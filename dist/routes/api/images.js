"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageProcess_1 = __importDefault(require("../../utilities/imageProcess"));
var images = express_1.default.Router();
var thumbfile = '/Users/damonclark/Desktop/Udacity/image-processing-api/assetts/thumb/';
images.get('/', function (req, res) {
    var filename = req.query.filename;
    var width = req.query.width;
    var height = req.query.height;
    (0, imageProcess_1.default)(filename, width, height).then(function () {
        var mimeType = 'image/png'; // e.g., image/png
        res.contentType(mimeType);
        res.sendFile(thumbfile + filename + '_thumb.jpeg');
    });
});
exports.default = images;
