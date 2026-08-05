import pool from "../db/db.js";

const authorize = (...allowedRoles) => {
    return async (req, res, next) => {
        try {
            const userId = req.user.id;
            const sql = "SELECT role FROM users_list WHERE id = $1";
            const result = await pool.query(sql, [userId]);
            if(result.rows.length === 0) {
                return res.status(404).json({
                    message: "User not found"
                });
            }
            const userRole = result.rows[0].role;
            if (!allowedRoles.includes(userRole)) {
                return res.status(403).json({
                    message: "Access denied."
                });
            }
            next();
        }
        catch (error) {
            next(error);
        }
    }
};

export default authorize;