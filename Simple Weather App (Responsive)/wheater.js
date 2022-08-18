let database = [];

async function getData() {
    let input = document.getElementById("input").value;
    document.querySelector("#valuesOfApp").classList.remove("show")
    document.querySelector("#valuesOfApp").classList.add("show")
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${input.toLowerCase()}`);
    let response = await data.json();
    database = response

    if (database.code === "404") {
        document.getElementById("valuesOfApp").innerHTML=`<h2>Locatia nu a fost gasita</h2> `
    }
    console.log(database)
    draw();
}

async function timer () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    let onDiv = document.querySelector("#clock")
    onDiv.innerHTML = `${hours}:${minutes}:${seconds}`;

    setTimeout(timer, 1000);
}
timer();

function draw() {
    document.querySelector("#valuesOfApp").innerHTML = `
    <div>
        <img src="http://openweathermap.org/img/w/${database.weather[0].icon}.png"
    </div>
    <div>
        <div>Location: <strong>${(database.name)}</strong></div>
        <div>Description: <strong>${database.weather[0].description}</strong></div>
        <div>Temperature: <strong> Curent: ${database.main.temp} °C and feels like: ${database.main.feels_like} °C </strong></div>
        <div>Humidity: <strong>${database.main.humidity}</strong></div>
        <div>Pressure: <strong>${database.main.pressure}</strong></div>
        <div>Wind: <strong>${database.wind.speed} km/h </strong></div>
    </div>    
    `
}