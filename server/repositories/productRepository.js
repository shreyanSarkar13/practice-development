import pool from '../db/db.js';

export async function getAllProducts() {
    const sql = 'SELECT * FROM items_list';
    const result = await pool.query(sql);

    return result.rows;
}