const express = require("express");
const app = express();
const port = 8080;

app.get("/register", (req , res )=>{
    let {user , password } = req.query;
    // console.log("accepted ");
    res.send(`standard get responce . welcome ${user}!`);
});

app.post("/register", (req , res )=>{
    // console.log("accepted ");
    res.send("standard post responce");
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});


