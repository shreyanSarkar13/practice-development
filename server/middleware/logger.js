function logger(req, res, next) {
    console.log('Middleware Activated');
    next();
}

function logger1(req, res, next) {
    console.log("Incoming Request");
    next();
}
function logger2(req, res, next) {
    console.log("Current Time:", new Date());
    next();
}

function logger3(req, res, next) {
    req.company = "LTIMindtree";
    next();
}

export { logger, logger1, logger2, logger3 };
