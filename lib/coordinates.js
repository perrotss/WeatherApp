// const API_KEY = '7bf029f80cf5f7c9d41a9a29585d592e';

// const fetchWeatherByCoordinates = navigator.geolocation.getCurrentPosition((position) => {
//   const lat = position.coords.latitude;
//   const long = position.coords.longitude;
//   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       const timezone = (data.timezone);
//       const value = (data.weather[0].description);
//       const value2 = (data.weather[0].icon);
//       const value3 = (data.main.feels_like);
//       const value4 = (data.main.humidity);
//       const value5 = (data.main.temp_max);
//       const value6 = (data.main.temp_min);
//       const dateOfToday = new Date();
//       const localTime = dateOfToday.getTime();
//       const localOffset = dateOfToday.getTimezoneOffset() * 60000;
//       const utc = localTime + localOffset;
//       const place = utc + (1000 * `${timezone}`);
//       const newTime = new Date(place);
//       // const value2 = (data.features[1].geometry.coordinates[1]);
//       newDate.insertAdjacentHTML('beforeend', `<h3>${newTime}</h3>`);
//       coordinates.insertAdjacentHTML('beforeend', `<span>${data.name}</span>`);
//       weather.insertAdjacentHTML('beforeend', `<p>${value}</p>`);
//       icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//       temp.insertAdjacentHTML('beforeend', `<h2>${Math.round(value3)}\u00B0C</h2>`);
//       // newDate.insertAdjacentHTML('beforeend', `<h3>${d}</h3>`);
//       air.insertAdjacentHTML('beforeend', `<h3>${Math.round(value4)}%</h3>`);
//       air1.insertAdjacentHTML('beforeend', `<h3>${Math.round(value5)}\u00B0C</h3>`);
//       air2.insertAdjacentHTML('beforeend', `<h3>${Math.round(value6)}\u00B0C</h3>`);
//     });
// });


// export { fetchWeatherByCoordinates };
