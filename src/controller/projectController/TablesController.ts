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
            image2 BYTEA NOT NULL,
            image3 BYTEA,
            image4 BYTEA,
            image5 BYTEA,
            image6 BYTEA,
            image7 BYTEA,
            image8 BYTEA,
            image9 BYTEA
        )`;
        await pool.query(sql);
        return res.status(200).json({'message': 'table created'});
    }
}