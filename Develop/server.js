const express = require("express");
const mongoose = require("mongoose")
const logger = require("morgan");
//Add mongoose

const PORT = 3002;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true }));
app.use(express.static("public"));

app.use(require(("./routes/htmlRoutes")))

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
})