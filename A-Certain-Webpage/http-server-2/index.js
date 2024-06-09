const express = require("express");
const app = express();
function calculateSum (n) {
    let ans = 0;
    for (i = 0; i < n; i ++) {
        ans = ans + i;
    }
    return ans;
}
app.get('/', function(req, res) {
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send ("hi your answer is " + ans);
})
app.listen(3002);