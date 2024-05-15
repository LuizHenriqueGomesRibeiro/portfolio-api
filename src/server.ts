import express, { Request, Response } from 'express';
import { TablesController } from './controller/projectController/TablesController';

const app = express();
app.use(express.json());
const port: Number = 3001;

const tablesController: TablesController = new TablesController();

app.get('/', tablesController.createProjectTable);

app.listen(port, () => {
    console.log(`App running on port:${port}`);
});