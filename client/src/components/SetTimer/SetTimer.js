import React from 'react';
import { TextField } from "@mui/material";


const DisplayTimer = ({ setHours, setMinutes, setSeconds }) => {
    return (
        <form>
            <TextField
                variant="outlined"
                label="hours"
                type="number"
                placeholder="hours"
                defaultValue={0}
                onChange={(e) => setHours(e.target.value)}
            />
            <TextField
                variant="outlined"
                label="minutes"
                type="number"
                placeholder="minutes"
                defaultValue={0}
                onChange={(e) => setMinutes(e.target.value)}
            />
            <TextField
                variant="outlined"
                label="seconds"
                type="number"
                placeholder="seconds"
                defaultValue={0}
                onChange={(e) => setSeconds(e.target.value)}
            />
        </form>
    )
}

export default DisplayTimer
