const { getDateDifference, getCurrentDate, parseStampToDate, parseDateToStamp } = require("./DateModule"); 

console.log(getDateDifference(new Date(2023, 0, 0), new Date(2023, 0, 2)));
console.log(getCurrentDate());
console.log(parseStampToDate(Date.now()));
console.log(parseDateToStamp(new Date()));
