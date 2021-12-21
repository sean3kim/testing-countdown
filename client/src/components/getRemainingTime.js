// snapshot time and now has to be the big ms number that comes from date.now()
//   calculate time gone by finding the different of snapshot and now
//      but setInterval is firing every 10 ms so it should be every hundredths by default
//      so these functions should handle the rollover from reaching 10
//          10 hundredths --> increment tenths and reset hundredths to 0
export const getRemainingTime = (snapshotTime) => {
    const now = Date.now();
    return {
        seconds: getRemainingSeconds(snapshotTime, now),
        tenths: 2,
        hundredths: 5
    }
};

const getRemainingSeconds = (snapshot, now) => {
    const diff = now - snapshot;
    // diff is in ms --> convert to seconds
    const diffSeconds = diff / 1000;

}