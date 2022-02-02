const express = require("express");
const mongoose = require("mongoose")
const { connectDb } = require("./helpers/db");
const { host, port, db } = require("./configuration");
const app = express();
const PostSchema = new mongoose.Schema({
    name: String
  });
const Post = mongoose.model('Post', PostSchema);

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started api service on port: ${port}`);
        console.log(`On host ${host}`);
        console.log(`DB url ${db}`);

        const silence = new Post({ name: 'Silence' });
        silence.save(function(err, savedSilence) {
            if (err) return console.error(err);
            console.log("savedSilence", savedSilence);
        });
    });
}

app.get("/test", (req, res) => {
    res.send("Server work!");
});


connectDb()
    .on("error", console.log)
    .on("disconnected", connectDb)
    .once("open", startServer);