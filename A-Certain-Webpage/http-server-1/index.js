const express = require("express");
const body_parser = require("body-parser")
const port = 3000
const app = express();
app.use(body_parser.json())
app.get('/route-handler', function(req, res) {
    res.json({
        name:'rick',
        age:'21'
    })
})
app.get('/', function(req, res) {
    res.send('Hello World!')
})
app.post('/conversation', (req, res) => {
    console.log(req.body)
    res.send({
        msg: "2 + 2 = 4"
    })
})

// app.listen(port);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })