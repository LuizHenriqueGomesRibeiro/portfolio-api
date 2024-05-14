import { Request, Response } from 'express';
import { pool } from "../../db";

export class TablesController {
    async createProjectTable(req: Request, res: Response): Promise<Response> {
        const sql = `
            CREATE TABLE IF NOT EXISTS projects (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT,
            local VARCHAR(100),
            area NUMERIC,
            photos VARCHAR(100),
            image1 TEXT NOT NULL,
            image2 TEXT,
            image3 TEXT,
            image4 TEXT,
            image5 TEXT,
            image6 TEXT,
            image7 TEXT,
            image8 TEXT,
            image9 TEXT,
        )`;
        await pool.query(sql);
        return res.status(200).json({'message': 'table created'});
    }
}