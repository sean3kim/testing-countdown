import React from 'react'
import { useState, useEffect } from "react";
import { getRemainingTime } from "../getRemainingTime";
import SetTimer from "../SetTimer/SetTimer";
import { Typography, Button } from "@mui/material";


const NewTimer = () => {
    const [start, setStart] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    let intervalId;
    useEffect(() => {
        if (start) {
            const snap = Date.now();
            intervalId = setInterval(() => {
                updateTimeDisplay(snap, { hours, minutes, seconds });
            }, 1000)
            return () => clearInterval(intervalId);
        }
    }, [start])

    const updateTimeDisplay = (snap, refTime) => {
        const timeLeft = getRemainingTime(snap, refTime);
        if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
            clearInterval(intervalId);
            setStart(false);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
            console.log("times up");
        } else {
            setHours(timeLeft.hours);
            setMinutes(timeLeft.minutes);
            setSeconds(timeLeft.seconds);
        }
    }

    const handleStart = (e) => {
        e.preventDefault();
        setStart(true);
    }

    return (
        <div>
            <h1>
                {hours < 10 ? '0' + hours : hours}:
                {minutes < 10 ? '0' + minutes : minutes}:
                {seconds < 10 ? '0' + seconds : seconds}
            </h1>
            <SetTimer
                setHours={setHours}
                setMinutes={setMinutes}
                setSeconds={setSeconds}
            />
            <Button
                onClick={(e) => handleStart(e)}
            >
                start
            </Button>
        </div>
    )
}

export default NewTimer
