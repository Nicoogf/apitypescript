"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//middleware transforma req.body a json
app.use(express_1.default.json());
const PORT = 3000;
app.get("/ping", (_req, res) => {
    console.log("Consulta Realizada");
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto:  ${PORT}`);
});
