"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://jailsonwin:laduo2001@cluster0.ic2hf.mongodb.net/compass-project");
let db = mongoose_1.default.connection;
exports.default = db;
