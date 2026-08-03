import jwt from "jsonwebtoken";

const generateAccess_token = (user) => {
    return jwt.sign({
        id: user.id,
        name: user.name,
        email: user.email
    },
        process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
}

const generateRefresh_token = (user) => {
    return jwt.sign({
        id: user.id,
    },
        process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
}