const express = require("express");
const mongoose = require("mongoose")
const logger = require("morgan");

//Add mongoose

const PORT = process.env.PORT || 3002;
const app = express();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(require("./routes/htmlRoutes"))
app.use(require("./routes/apiRoutes"))


app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
})

