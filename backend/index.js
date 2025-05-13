const express = require("express");
const app = express();
const port = 8080;

app.get("/register", (req , res )=>{
    // console.log("accepted ");
    res.send("standard get responce");
});

app.post("/register", (req , res )=>{
    // console.log("accepted ");
    res.send("standard post responce");
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});


