var express = require('express');
var cors = require('cors');  // чтобы стучаться с любого порта
var bodyParser = require('body-parser');    // чтобы преобразовать в json без stringify
const MongoClient = require("mongodb").MongoClient;

var app = express();
app.use(cors());
app.use(bodyParser.json());
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useUnifiedTopology: true });

mongoClient.connect(function (err, client) {
    if (err) return console.log('ERROR', err);
    const db = client.db("mydb");

    app.post('/sendMessage', function (req, res) {
        console.log(req.body);

        if (!req.body) return res.sendStatus(400);

        db.collection("users").insert(req.body, function (err, result) {
            if (err) return console.log(err);
            res.send(req.body);
        });
    });

    app.listen(3000, function () {
        console.log("Example app listening on port 3000!");
    });
});

process.on("SIGINT", () => {
    console.log('exit');
    dbClient.close();
    process.exit();
});