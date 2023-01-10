"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hi, It's online.");
});
app.post("/demo1", (req, res, next) => {
    var _a;
    try {
        const { body } = req;
        const contexto = (_a = req.headers['contexto']) === null || _a === void 0 ? void 0 : _a.toString();
        if (!contexto) {
            throw new Error("Header contexto invalido");
        }
        console.log(body);
        res.send(body);
    }
    catch (error) {
        console.log("Error: ", error);
        //next(error)
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
});
app.listen(PORT, () => {
    console.log("Server is UP ", PORT);
});
//# sourceMappingURL=app.js.map