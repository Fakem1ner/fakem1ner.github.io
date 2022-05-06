getCity = document.querySelector('#get_city');
let APIKey = 'c81e78abd21d2e95256bb10b52178d47';

function setWeather(weather) {
  console.log(weather)
  let temp = Math.round(weather.main.temp);
  let weatherStatus = weather.weather[0].description;
  let icon = weather.weather[0].icon;
  let feelsLike = Math.round(weather.main.feels_like);
  let windSpeed = weather.wind.speed;
  let city = weather.name;
  
  document.querySelector('#weather').innerHTML = 
    `
      <div class="weather__container">
        <div class="weather__city">Погода в городе ${city}:</div>
        <ul class="weather__list">
          <li class="weather__element">Температура: ${temp} °C</li>
          <li class="weather__element">Статус: ${weatherStatus}</li>
          <li class="weather__element">Ощущается как: ${feelsLike} °C</li>
          <li class="weather__element">Скорость ветра: ${windSpeed} м/с.</li>
        </ul>
        <img class="weather__icon" src="https://openweathermap.org/img/w/${icon}.png" width="64px">
      </div>
    `
}

async function loadWeather(
  place = 'syzran'
) {
  let server = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APIKey}&units=metric&lang=ru&exclude=daily`
  let response = await fetch(server, {
    method: 'GET'
  });
  let responseResult = await response.json();

  if(response.ok) {
    setWeather(responseResult);
  }
  else {
    document.querySelector('#weather').innerHTML = 
    `
      <div class="weather__container">
        <div class="weather__error">${responseResult.message}</div>
      </div>
    `
  }
}

getCity.addEventListener("submit", function(e) {
  e.preventDefault();
  let city = translite(getCity.city.value);
  loadWeather(city);
})