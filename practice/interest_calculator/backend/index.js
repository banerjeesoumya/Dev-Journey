const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/interest", (req, res) =>{
    const principal = parseInt(req.query.principal);
    const rate  = parseInt(req.query.rate);
    const time = parseInt(req.query.time);

    const interest = (principal * rate * time) / 100;
    // const n = parseInt(req.query.n);
    // const ans = n + 2

    res.send({
        interest: interest
    });
})

app.listen(3003);