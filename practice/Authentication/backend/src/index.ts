import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";

const JWT_SECRET = "test123"

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const token = jwt.sign({
        username
    }, JWT_SECRET);
    res.cookie("token", token);
    res.send("Logged in..!!");
});

app.get("/userDet", (req, res) => {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    res.send({
        userId : decoded.username
    });
})

app.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({
        message: "Logged out"
    });
})

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname), "../src/index.html")
// })

app.listen(3000);