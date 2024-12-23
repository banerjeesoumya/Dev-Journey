import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();
client.on("error", (err) => {
    console.log("Redis Client error", err)
})

async function Server() {
    try {
        await client.connect();
        console.log("Connected to Redis")
        
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        });
    } catch (err) {
        console.log("Failed to connect to Redis", err)
    }
}

app.post("/submit", async (req, res) => {
    const {
        problemId,
        userId,
        code,
        language
    } = req.body;

    try {
        await client.lPush("submissions", JSON.stringify({
            problemId, userId, code, language
        }));
        res.status(200).send({
            message: "Submission received succesfully"
        })
    } catch (err) {
        console.log("Error", err);
        res.status(500).send({
            message: "An error occured"
        })
    }
})

Server()