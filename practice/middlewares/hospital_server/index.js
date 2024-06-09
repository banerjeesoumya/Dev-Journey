const express = require("express");
const zod = require("zod");
const app = express();
const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
});

app.use(express.json());

app.post('/login-page', (req, res) => {
    const response = schema.safeParse(req.body);
    if (!response.success) {
        res.status(404).json({
            msg: "Wrong input type"
        })
        return;
    }
    res.send(response)
});
app.listen(3000);

// const schema = zod.array(zod.number());
// let errCount = 0;
// app.use(express.json());

// app.post('/health-checkup', (req, res) => {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);
//     if(!response.success) {
//         res.status(411).json({
//             msg: "Invalid Input"
//         });
//     }
//     else {
//         res.send({
//             response
//         });
//     }
// });


// Demonstrating the use of global catches..basically for handling errors, like instead of exposing the client of the internal server details while displaying the error we use a global catch where we can choose what error message to display in case of any error encountered in any of the routes
// app.post('/health-checkup', (req, res) => {
//     const kidneys = req.body.kidneys;
//     const kidneyLength = kidneys.length;

//     res.send ("you have " + kidneyLength + "kidney");
// }); 

// app.use(function (err, req, res, next) {
//     errCount ++; //taking care of the number of times error has been encountered
//     console.log(errCount);
//     res.status(404).json({
//         msg : "Sorry something went wrong"
//     });  
// });

// function userMiddleware(req, res, next) {
//     const username = req.headers.username
//     const password = req.headers.password
//     if (username != "rick" || password != "pass") {
//         res.status(400).json({
//             msg: "User doesn't exist"
//         });
//     }
//     else {
//         next();
//     }
// }
// function kidneyMiddleware(req, res, next) {
//     const kidneyId = req.query.kidneyId;
//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(403).json({
//             msg : "Invalid input"
//         });
//     }
//     else {
//         next();
//     }
// }

// app.get('/health-checkup', userMiddleware, kidneyMiddleware, function (req, res) {
//     res.json({
//         msg: "Your kidney looks fine!"
//     });
// });