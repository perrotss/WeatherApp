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

const API_KEY = '7bf029f80cf5f7c9d41a9a29585d592e';

const fetchWeatherByCoordinates = navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const timezone = (data.timezone);
      const value = (data.weather[0].description);
      const value2 = (data.weather[0].icon);
      const value3 = (data.main.feels_like);
      const value4 = (data.main.humidity);
      const value5 = (data.main.temp_max);
      const value6 = (data.main.temp_min);
      const dateOfToday = new Date();
      const localTime = dateOfToday.getTime();
      const localOffset = dateOfToday.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      const place = utc + (1000 * `${timezone}`);
      const newTime = new Date(place);
      // const value2 = (data.features[1].geometry.coordinates[1]);
      newDate.insertAdjacentHTML('beforeend', `<h3>${newTime}</h3>`);
      coordinates.insertAdjacentHTML('beforeend', `<span>${data.name}</span>`);
      weather.insertAdjacentHTML('beforeend', `<p>${value}</p>`);
      icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      temp.insertAdjacentHTML('beforeend', `<h2>${Math.round(value3)}\u00B0C</h2>`);
      // newDate.insertAdjacentHTML('beforeend', `<h3>${d}</h3>`);
      air.insertAdjacentHTML('beforeend', `<h3>${Math.round(value4)}%</h3>`);
      air1.insertAdjacentHTML('beforeend', `<h3>${Math.round(value5)}\u00B0C</h3>`);
      air2.insertAdjacentHTML('beforeend', `<h3>${Math.round(value6)}\u00B0C</h3>`);
    });
});

const API_KEY = '7bf029f80cf5f7c9d41a9a29585d592e';

const fetchAPI = () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newLocation.value}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      coordinates.innerHTML = "";
      weather.innerHTML = "";
      icon.src.innerHTML = "";
      temp.innerHTML = "";
      newDate.innerHTML = "";
      air.innerHTML = "";
      air1.innerHTML = "";
      air2.innerHTML = "";
      const timezone = (data.timezone);
      const dateOfToday = new Date();
      const localTime = dateOfToday.getTime();
      const localOffset = dateOfToday.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      const place = utc + (1000 * `${timezone}`);
      const newTime = new Date(place);
      console.log(newTime);
      const value = (data.weather[0].description);
      const value2 = (data.weather[0].icon);
      const value3 = (data.main.feels_like);
      const value4 = (data.main.humidity);
      const value5 = (data.main.temp_max);
      const value6 = (data.main.temp_min);
      // const value2 = (data.features[1].geometry.coordinates[1]);
      coordinates.insertAdjacentHTML('beforeend', `<span>${newLocation.value}</span>`);
      weather.insertAdjacentHTML('beforeend', `<p>${value}</p>`);
      icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      temp.insertAdjacentHTML('beforeend', `<h2>${Math.round(value3)}\u00B0C</h2>`);
      newDate.insertAdjacentHTML('beforeend', `<h3>${newTime}</h3>`);
      air.insertAdjacentHTML('beforeend', `<h3>${Math.round(value4)}%</h3>`);
      air1.insertAdjacentHTML('beforeend', `<h3>${Math.round(value5)}\u00B0C</h3>`);
      air2.insertAdjacentHTML('beforeend', `<h3>${Math.round(value6)}\u00B0C</h3>`);
    });
};

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
