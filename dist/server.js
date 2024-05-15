"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TablesController_1 = require("./controller/projectController/TablesController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3001;
const tablesController = new TablesController_1.TablesController();
app.get('/', tablesController.createProjectTable);
app.listen(port, () => {
    console.log(`App running on port:${port}`);
});
