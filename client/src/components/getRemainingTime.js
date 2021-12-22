// snapshot time and now has to be the big ms number that comes from date.now()
//   calculate time gone by finding the different of snapshot and now
//      but setInterval is firing every 10 ms so it should be every hundredths by default
//      so these functions should handle the rollover from reaching 10
//          10 hundredths --> increment tenths and reset hundredths to 0
export const getRemainingTime = (snapStart, refTime) => {
    const now = Date.now();
    const diffMs = now - snapStart;

    // difference of 145,000 ms = 145s = 2min 25s
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);


    const dispSeconds = diffSeconds % 60;
    const dispMinutes = diffMinutes % 60;
    const dispHours = diffHours % 60;

    let refSeconds = parseInt(refTime.seconds);
    let refMinutes = parseInt(refTime.minutes);
    let refHours = parseInt(refTime.hours);

    const getSeconds = () => {
        if (dispSeconds > refSeconds) {
            // need to carry from minutes
            if (refMinutes === 0) {
                // need to carry from hours
                refHours -= 1;
                refMinutes += 59;
            } else {
                refMinutes -= 1;
            }
            return (refSeconds + 60) - dispSeconds;
        } else {
            return refSeconds - dispSeconds;
        }
    }

    const getMinutes = () => {
        if (dispMinutes > refMinutes) {
            refHours -= 1;
            return (refMinutes + 60) - dispMinutes;
        } else {
            return refMinutes - dispMinutes;
        }
    }

    const getHours = () => {
        return refHours - dispHours;
    }

    const finalSeconds = getSeconds();
    const finalMinutes = getMinutes();
    const finalHours = getHours();

    return {
        hours: finalHours,
        minutes: finalMinutes,
        seconds: finalSeconds
    }
};
