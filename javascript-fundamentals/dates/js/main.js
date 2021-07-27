/* how many days passed by since the day you were born */

function daysBetweenDates(dateOne, dateTwo) {
  const oneDay = 1000 * 60 * 60 * 24; //how many milliseconds are in 1 day, milliseconds => minute => hour => day
  const difference = Math.abs(dateTwo - dateOne); //calculate absolute number, if the number is negative if will give you a positive  number
  return Math.floor(difference / oneDay);
}

const today = new Date(); //date today by default Tue Jul 27 2021 18:06:21 GMT+0200 (Central European Summer Time)
const birthday = new Date(1988, 4, 26); // the new date constructor receives year, month (jan = 0), day Thu May 26 1988 00:00:00 GMT+0200 (Central European Summer Time)

console.log(daysBetweenDates(today, birthday)); //12115
