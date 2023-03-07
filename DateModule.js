const getCurrentDate = () => new Date();
const parseStampToDate = timeStamp => new Date(timeStamp);
const parseDateToStamp = date => Date.parse(date);
const getDateDifference = (date1, date2) => {
  let diff = Math.abs(date1 - date2);

  const day = 1000 * 3600 * 24;
  const hour = 3600 * 1000;
  const minute = 1000 * 60;

  let days = Math.floor(diff / day);
  diff -= day * days;
  let hours = Math.floor(diff / hour);
  diff -= hour * hours;
  let minutes = Math.floor(diff / minute);
  diff -= minute * minutes;
  
  return `days: ${days}, hours: ${hours}, minuts: ${minutes}`;
};

module.exports = {
  getDateDifference,
  parseDateToStamp,
  parseStampToDate,
  getCurrentDate
}