const API_KEY = "4b95e893c7707368d454b620979aece3";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in ", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} /${data.main.temp}  `;
    });
}
function OnGeoError() {
  alert("Can't find you . no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, OnGeoError);
