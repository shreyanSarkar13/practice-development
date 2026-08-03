import jwt from "jsonwebtoken"

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            msg: "No token, authorization denied"
        });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    }
    catch (error) {
        return res.status(401).json({
            msg: "Invalid Token, authorization denied"
        });
    }
    next();
};

export { authenticate };