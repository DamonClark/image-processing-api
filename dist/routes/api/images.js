"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const imageProcess_1 = __importDefault(require("../../utilities/imageProcess"));
const images = express_1.default.Router();
const fullpath = path_1.default.join(__dirname + "../../../../assetts/full/");
const thumbpath = path_1.default.join(__dirname + "../../../../assetts/thumb/");
images.get("/", (req, res) => {
    const filename = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;
    if (fs_1.default.readdirSync(fullpath).length === 0) {
        res.send("No file found");
    }
    else {
        (0, imageProcess_1.default)(filename, width, height).then(function () {
            const mimeType = "image/png"; // e.g., image/png
            res.contentType(mimeType);
            res.sendFile(thumbpath + filename + "_thumb.jpeg");
        });
    }
});
exports.default = images;
//# sourceMappingURL=images.js.map