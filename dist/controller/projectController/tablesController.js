"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesController = void 0;
const db_1 = require("../../db");
class TablesController {
    createProjectTable(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield db_1.pool.query(sql);
            return res.status(200).json({ 'message': 'table created' });
        });
    }
}
exports.TablesController = TablesController;
