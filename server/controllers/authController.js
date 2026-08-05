import pool from "../db/db.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const sql = "SELECT * FROM USERS_LIST WHERE email = $1";
        const result = await pool.query(sql, [email]);

        if (result.rows.length > 0) {
            console.log(email, " already exists");
            return res.status(400).json({
                message: "Email already exists"
            });
        }
        console.log(name, email, password);
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await pool.query(
            `INSERT INTO users_list (name, email, password, role)
            VALUES ($1, $2, $3, $4)
            RETURNING id, name, email`,
            [name, email, hashedPassword,"user"]
        );
        return res.status(201).json({
            message: "User registered successfully",
            user: newUser.rows[0]
        });
        next();
    }
    catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    const {name, email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }
    const sql = "SELECT * FROM USERS_LIST WHERE EMAIL = $1";
    const result = await pool.query(sql, [email]);
    if (result.rows.length === 0) {
        return res.status(400).json({
            message: "Invalid Email or password"
        });
    }
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({
            message: "Invalid Email or Password"
        });
    }
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );
    return res.status(200).json({
        message: "Login successful",
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });
};