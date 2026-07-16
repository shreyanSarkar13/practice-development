import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);
app.use(logger1);
app.use(logger2);
app.use(logger3);

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

app.get("/", (req, res) => {
    res.status(200).send("Server Running");
});

app.get("/search", (req, res) => {
    res.json(req.query);
})

app.get("/search/:id", (req, res) => {
    res.json({
        "product-id": req.params.id
    });
})

app.get("/test", (req, res) => {
    res.json({
        message: "Hello from backend",
        success: true
    });
});

app.get("/api/docs", (req, res) => {
    res.send(
        `<table>
            <tr>
                <th>ID</th>
                <th>API</th>
                <th>Purpose</th>
            </tr>
            <tr>
                <td>1</td>
                <td>/</td>
                <td>Status of server</td>
            </tr>
            <tr>
                <td>2</td>
                <td>/test</td>
                <td>response from server with a message</td>
            </tr>
            <tr>
                <td>3</td>
                <td>/api</td>
                <td>live api data sample</td>
            </tr>
        </table>`
    );
});

app.get("/api", (req, res) => {
    res.json({
        "id": 43,
        "title": "Fjord of the North",
        "description": "The breathtaking beauty of the Norwegian fjords is a sight to behold.Towering cliffs rise dramatically from the calm, deep waters, creating a dramatic and awe-inspiring landscape.",
        "price": 29.99,
        "image": "https://images.pexels.com/photos/3534416/pexels-photo-3534416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "rating": {
            "rate": 4.5,
            "count": 120
        }
    });
});

app.post("/users", (req, res) => {
    console.log(req.body);
    res.json({
        recieved: req.body,
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});