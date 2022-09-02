
// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  fetch(`${URL}/?q=${city}&appid=${API_KEY}&units=imperial`)
  .then((response) => response.json())
  .then((data) => showWeatherData(data))
}

/**
 * Retrieve city input and get the weather data
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
}

/**
 * Show the weather data in HTML
 */
const showWeatherData = (weatherData) => {
const cityName = document.getElementById('city-name')
const weatherType = document.getElementById('weather-type')
const temp = document.getElementById('temp')  
const minTemp = document.getElementById('min-temp')
const maxTemp = document.getElementById('max-temp')
cityName.innerText= weatherData.name
weatherType.innerText= weatherData.weather[0].main
temp.innerText= weatherData.main.temp
minTemp.innerText= weatherData.main.temp_min
maxTemp.innerText= weatherData.main.temp_max
  
}
