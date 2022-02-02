const express = require("express");
const { connectDb } = require("./helpers/db");
const { host, port, db } = require("./configuration");
const app = express();

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started api service on port: ${port}`);
        console.log(`On host ${host}`);
        console.log(`DB url ${db}`);
    });
}

app.get("/test", (req, res) => {
    res.send("Server work!");
});


connectDb()
    .on("error", console.log)
    .on("disconnected", connectDb)
    .once("open", startServer);