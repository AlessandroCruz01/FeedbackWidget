//SQlite
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({message: "Server exec"});
} );

app.listen(3333, () => {
    console.log("backend Exec");
});

