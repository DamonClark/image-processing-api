"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const imageProcess_1 = __importDefault(require("../utilities/imageProcess"));
describe("Hello World Server", function () {
    it("expect /api to be status 200", () => {
        app.get("/api", (req, res) => {
            expect(res.statusCode).toBe(200);
        });
    });
    it("expect /api to return hello world", () => {
        app.get("/api", (req, res, body) => {
            expect(body).toBe("Hello, world!");
        });
    });
    it("expect /api/images to be status 200", () => {
        app.get("/api/images", (req, res) => {
            expect(res.statusCode).toBe(200);
        });
    });
    it("expect image transform to not throw an error", () => {
        app.get("/api/images?filename=encenadaport&width=400&height=400", (req, res) => {
            expect(res.statusCode).toBe(200);
        });
    });
    it("expect image transform to not throw an error", () => {
        expect(() => __awaiter(this, void 0, void 0, function* () {
            yield (0, imageProcess_1.default)("encenadaport", "200", "200");
        })).not.toThrow();
    });
});
//# sourceMappingURL=indexSpec.js.map