const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://rick:rickdb_learn%400110@cluster0.2xk6enf.mongodb.net/firstTimeVisitors");

const User = mongoose.model('Client_Users', { // 👈👈 here 'User' is the name of the mongoose model and 'Users' is the table (collection) name
    name: String, 
    email: String, 
    password: String
});

app.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name  = req.body.name;

//  Checking if a user alreeady exists
//  finOne() is an asynchronous function thus using promises/ async-await code syntax
    const existingUser = await User.findOne({ email: username });
    if (existingUser) {
        return res.status(400).send("Username already exists");
    }

    const user = new User({ 
        name: name,
        email: username,
        password: password
    });
    user.save();
    res.json({
        msg: "User createrd successfully"
    });
})

app.listen(3000);
