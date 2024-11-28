//Given a time in -hour AM/PM format, convert it to military (24-hour) time.

//Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
//- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
function convertToMilitaryTime(time12h) {
    let period = time12h.slice(-2);
    let [hour, minute, second] = time12h.slice(0, -2).split(':').map(Number);
    if (period === "AM") {
        if (hour === 12) {
            hour = 0;
        }
    } else if (period === "PM") {
        if (hour !== 12) {
            hour += 12; 
        }
    }
    hour = hour < 10 ? '0' + hour : hour;
    return `${hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
}
console.log(convertToMilitaryTime("12:30:45PM")); 
console.log(convertToMilitaryTime("12:30:45AM")); 
console.log(convertToMilitaryTime("01:15:30PM")); 
console.log(convertToMilitaryTime("01:15:30AM")); 