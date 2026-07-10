const city = document.querySelector("#city");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

const apiKey = "18196adb736a0ff23b9fa214ca394629";

btn.addEventListener("click", async function () {

    if (city.value == "") {
        result.innerHTML = "<h3>Please Enter City Name</h3>";
        return;
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`);

    const data = await response.json();

if (data.name == undefined) {
    result.innerHTML = "<h3>City Not Found</h3>";
    return;
}

    result.innerHTML = `
        <h2>${data.name}</h2>
   
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

        <h1>${Math.round(data.main.temp)}°C</h1>

        <p>⚡Weather: ${data.weather[0].main}</p>

        <p>💧Humidity: ${data.main.humidity}%</p>

        <p>💨Wind: ${data.wind.speed} km/h</p>
    `;

    });