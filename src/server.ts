import express, { Request, Response } from 'express';
import { TablesController } from './controller/TablesController';
import { MessageController } from './controller/messageController/MessageController';
import cors from 'cors';

const app = express();
app.use(express.json());
const port: Number = 3001;
app.use(cors());

const tablesController: TablesController = new TablesController();
const messageController: MessageController = new MessageController();

app.get('/', tablesController.createProjectTable);
app.post('/send-message', messageController.sendMessageController);

app.listen(port, () => {
    console.log(`App running on port:${port}`);
});