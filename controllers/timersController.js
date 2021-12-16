const Timer = require("../models/timerModel");

exports.newTimer = async (req, res) => {
    const { start, end } = req.body;

    if (!start || !Object.keys(req.body).includes("end")) {
        res.status(400).send("please include a start and end time");
        return;
    }
    const newTimer = new Timer({ start, end });
    await newTimer.save();

    res.status(201).json({ timer: newTimer });
}