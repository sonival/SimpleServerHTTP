"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use("/", (req, res) => {
    res.send("Online App");
});
app.post("/demo1", (req, res, next) => {
    try {
        var userAgent = req.headers['contexto'];
    }
    catch (error) {
        console.log("Error: ", error);
        next(error);
    }
});
app.listen(PORT, () => {
    console.log("Server is UP ", PORT);
});
