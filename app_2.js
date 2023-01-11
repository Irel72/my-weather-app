function formatDate(date) {
    let hours = date.getHours();
    if (hours< 10) {
        hours = `0${hours}`
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes= `0${minutes}`
    }
    let dayIndex = date.getDay()
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    let day = days[dayIndex]
    return `${day}${hours}:${minutes}`;
}
function handleSearch(event) {
    event.preventDefault()
    let cityElement = document.querySelector("#city")
    let cityInput = document.querySelector("#city-input")
    cityElement.innerHTML = cityInput.value;
}

function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#description").innerHTML = response.data.weather[0].main;

}

function searchCity(event) {
let apiKey = "f3887e262c88d1158f7e2ef4998e234c"
let units = "metric"
let city = document.querySelector("#city-input").value
let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
let apiUrl= `${apiEndpoint}?&appid=${apiKey}&units${units}`  
axios.get(apiUrl).then(displayWeatherCondition);
    
}

function handleSubmit(event) {
    event.preventDefault()
    let city = document.querySelector("#city-input.value")
    searchCity(city);
}

let dateElement = document.querySelector("#date")
let currentTime = new Date()
dateElement.innerHTML = formatDate(currentTime)

searchForm = document.querySelector("#search-form")
searchForm.addEventListener("submit", searchCity)