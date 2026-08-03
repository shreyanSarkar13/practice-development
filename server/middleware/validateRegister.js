const validateRegister = (req, res, next) => {
    //console.log("validateRegister middleware called");
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Please provide name, email and password"
        });
    }
    if (!email.includes("@")) {
        return res.status(400).json({
            message: "Please provide a valid email"
        });
    }
    if (password.length < 6) {
        return res.status(400).json({
            message: "Password must be at least 6 characters long"
        });
    }
    next();
};

export default validateRegister;