const express = require('express');
const app = express();

app.get('/test', (req, res) => {
res.send("Server work!");

});

app.listen(3000, () => {
    console.log("Started api service");
});