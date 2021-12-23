import React from 'react'
import { useState, useEffect } from "react";
import { getRemainingTime } from "../getRemainingTime";
import SetTimer from "../SetTimer/SetTimer";
import { Typography, Button } from "@mui/material";

const defaultTime = {
    hours: 0,
    minutes: 0,
    seconds: 0
};

const NewTimer = () => {
    const [start, setStart] = useState(false);
	const [reset, setReset] = useState(false);
    const [time, setTime] = useState(defaultTime);

	const clearState = () => {
            clearInterval(intervalId);
            setStart(false);
            setReset(false);
            setTime(defaultTime);
	}


    let intervalId;
    useEffect(() => {
        if (start) {
            const snap = Date.now();
            intervalId = setInterval(() => {
                updateTimeDisplay(snap, time);
            }, 1000)
            return () => clearInterval(intervalId);
        } else if (reset) {
            setReset(false);
        }

    }, [start, reset])


    const updateTimeDisplay = (snap, refTime) => {
        const timeLeft = getRemainingTime(snap, refTime);
        if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
		    clearState();
            console.log("times up");
        } else {
            setTime({
                hours: timeLeft.hours,
                minutes: timeLeft.minutes,
                seconds: timeLeft.seconds
            });
        }
    }

    const handleStart = (e) => {
        e.preventDefault();
        setStart(true);
    }

	const handleReset = () => {
		clearState();
        setReset(true);
	}

//            <h1>
//                {time.hours < 10 ? '0' + time.hours : time.hours}:
//                {time.minutes < 10 ? '0' + time.minutes : time.minutes}:
//                {time.seconds < 10 ? '0' + time.seconds : time.seconds}
//            </h1>
    return (
        <div>
            <SetTimer
                reset={reset}
                time={time}
                setTime={setTime}
            />
	    <span>
            <Button
                onClick={(e) => handleStart(e)}
            >
                start
            </Button>
            <Button
            onClick={() => handleReset()}
            >
                reset
            </Button>
	    </span>
        </div>
    )
}

export default NewTimer
