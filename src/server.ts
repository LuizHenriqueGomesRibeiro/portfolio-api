import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());
const port: Number = 3001;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`App running on port:${port}`);
});