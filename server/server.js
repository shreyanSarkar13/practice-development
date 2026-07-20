import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { logger, logger1, logger2, logger3 } from "./middleware/logger.js";
import productRoutes from "./routes/productRoutes.js";
import pool from "./db/db.js";
import errorHandler from "./middleware/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);
app.use(logger1);
app.use(logger2);
app.use(logger3);

app.use(productRoutes);
app.use(authRoutes);

app.use(errorHandler);

//app.use("/", productRoutes);
/*
async function testDatabase() {
    try {
        const result = await pool.query("SELECT * FROM items_list");
        console.log(result.rows);
    } catch (err) {
        console.error(err);
    }
}

testDatabase();
*/
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});