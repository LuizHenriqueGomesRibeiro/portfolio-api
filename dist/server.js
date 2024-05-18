"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TablesController_1 = require("./controller/TablesController");
const MessageController_1 = require("./controller/messageController/MessageController");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3001;
app.use((0, cors_1.default)());
const tablesController = new TablesController_1.TablesController();
const messageController = new MessageController_1.MessageController();
app.get('/', tablesController.createProjectTable);
app.post('/send-message', messageController.sendMessageController);
app.listen(port, () => {
    console.log(`App running on port:${port}`);
});
