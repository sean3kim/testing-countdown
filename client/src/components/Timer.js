import React from 'react';
import { useState, useEffect, useRef } from "react";
import { Button, Typography } from "@mui/material";
import SetTimer from './SetTimer/SetTimer';


const Timer = () => {
    const [start, setStart] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const saveCallback = useRef();
    let intervalId;

    const updateRemainingTime = () => {
        if (seconds === 0 && hours === 0 && minutes === 0) {
            setStart(false);
            clearInterval(intervalId);
        } else if (seconds <= 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
        } else if (minutes < 0) {
            setHours(hours - 1)
            setMinutes(59);
        } else {
            setSeconds(seconds - 1)
            console.log(minutes, seconds)
        }
    }

    useEffect(() => {
        saveCallback.current = updateRemainingTime;
    })

    useEffect(() => {
        if (start) {
            intervalId = setInterval(() => saveCallback.current(), 1000)
            return () => clearInterval(intervalId);
        }
    }, [start])

    const handleStart = (e) => {
        e.preventDefault();
        setStart(true);
    }
    const handleStop = () => {
        console.log("hello");
    }

    return (
        <div>
            <Typography>
                {hours < 10 ? '0' + hours : hours}:
                {minutes < 10 ? '0' + minutes : minutes}:
                {seconds < 10 ? '0' + seconds : seconds}
            </Typography>
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
            <Button
                onClick={(e) => handleStop(e)}
            >
                stop
            </Button>
        </div>
    )
}

export default Timer
