var express = require("express");
var app = express();
app.get("/names", (req, res, next) => {
    res.json(["Sam Devaprasad","Not Sam","Mark Cinali","Not Mark"]);
   });

app.listen(6063, () => {
 console.log("Server running on port 6063");
});

