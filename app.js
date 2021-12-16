const express = require("express");
const mongoose = require("mongoose");
const timerRoutes = require("./routes/timers");

const app = express();

const dbURL = "mongodb://localhost:27017/testing-project";
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// useCreateIndex: true,
// useFindAndModify: false

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("database connected");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/timer", timerRoutes);

module.exports = app;