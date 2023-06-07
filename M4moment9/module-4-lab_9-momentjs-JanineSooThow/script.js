//// Using the Moment.js library, try to solve the below problems (Use console.log() to check results. Run node script.js to test your code)
/*const moment = require('moment') used this code to import moment.js library */
// 1. Calculate the number of days between your birthdate and the current date
// Import moment.js library

/*const moment = require('moment');
const birthdate = moment([1991, 06, 24]);
const today = moment([2023, 03, 19]);
let totalDays = today.diff(birthdate, 'days');
console.log(totalDays); output: 11592 days */

// 2. Display the number of years, months, and days between your birthdate and current date
// 	Example: 24 years, 8 months, and 26 days

/*const moment = require('moment');
const birthdate = moment('1991-06-24');
const currentdate = moment('2023-03-19');
const duration = moment.duration(currentdate.diff(birthdate));

const years = duration.years();
const months = duration.months();
const days = duration.days();

console.log(`The duration between ${birthdate.format('LL')} and ${currentdate.format('LL')} is ${years} years, ${months} months, and ${days} days.`);
*/
// output: The duration between June 24, 1991 and March 19, 2023 is 31 years, 8 months, and 23 days.


// 3. Given two dates, display the date closest to the current date
/* const moment = require('moment');
const firstdate = moment('1991-06-24');
const secdate = moment('2023-03-19');

const diff1 = moment().diff(firstdate);
const diff2 = moment().diff(secdate);

const closestDate = diff1 < diff2 ? firstdate : secdate;
console.log(closestDate.format('LL')); */
//Output: March 19, 2023


// 4. Given two dates, display whether the first date is before or after the second date
/*const moment = require('moment');

const firstdate = moment('1991-06-24');
const secdate = moment('2023-03-19');

if (firstdate.isBefore(secdate)) {
    console.log(`${firstdate.format('LL')} is before ${secdate.format('LL')}`)
} else if (firstdate.isAfter(secdate)) {
    console.log(`${date1.format('LL')} is after ${date2.format('LL')}`);
}
*/

//Output: June 24, 1991 is before March 19, 2023









// 5. Display the current time in London
/*const moment = require('moment-timezone'); 
const london = moment().tz('Europe/London').format('LT'); //'LT' stands for local time. Can use other format 'moment().tz('Europe/London').format('h:mm:ss A'); 
console.log(london); //output 4:47AM */