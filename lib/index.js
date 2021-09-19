import { fetchWeatherByCoordinates } from './coordinates';
import { fetchAPI } from './searchapi';

const newEvent = document.querySelector('#form');
const currentLocation = document.querySelector('current');
const newLocation = document.querySelector('#location');
const coordinates = document.querySelector('#city');
const newDate = document.querySelector('#date');
const weather = document.querySelector('#description');
const icon = document.querySelector('#icon');
const temp = document.querySelector('#temperature');
const air = document.querySelector('#additional');
const air1 = document.querySelector('#additional1');
const air2 = document.querySelector('#additional2');

newEvent.addEventListener('submit', (e) => {
  e.preventDefault();
  fetchAPI();
});


// const dateOfToday = new Date();
// const localTime = dateOfToday.getTime();
// const localOffset = dateOfToday.getTimezoneOffset() * 60000;
// const utc = localTime + localOffset;
// const place = utc + (1000 * `${timezone}`);
// const newTime = new Date(place);
// console.log(newTime);

// const formattedDate = {
//   weekday: 'short', // long, short, narrow
//   day: 'numeric', // numeric, 2-digit
//   year: 'numeric', // numeric, 2-digit
//   month: 'long', // numeric, 2-digit, long, short, narrow
//   hour: 'numeric', // numeric, 2-digit
//   minute: 'numeric',
//   hour12: true
// };

// const d = new Date().toLocaleString('en-US', formattedDate);
