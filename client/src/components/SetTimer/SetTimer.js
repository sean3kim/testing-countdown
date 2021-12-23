import React from 'react';
import { TextField } from "@mui/material";


const DisplayTimer = ({ reset, time, setTime}) => {
    return (
        <form>
            <TextField
                variant="outlined"
                label="hours"
                type="number"
                placeholder="hours"
                value={time.hours}
                onChange={(e) => setTime({...time, hours: e.target.value})}
            />
            <TextField
                variant="outlined"
                label="minutes"
                type="number"
                placeholder="minutes"
                value={time.minutes}
                onChange={(e) => setTime({...time, minutes: e.target.value})}
            />
            <TextField
                variant="outlined"
                label="seconds"
                type="number"
                placeholder="seconds"
                value={time.seconds}
                onChange={(e) => setTime({...time, seconds: e.target.value})}
            />
        </form>
    )
}

export default DisplayTimer
