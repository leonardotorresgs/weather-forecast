const key = "979c397a11f01e27f0e4850f9fc6a57b"

function updateData(data) {
    console.log(data)
    document.querySelector("h2").innerHTML = "Weather in " + data.name
    document.querySelector(".temp ").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".weather").innerHTML = data.weather[0].description
    document.querySelector(".humid").innerHTML = "Humidity: " + data.main.humidity + "%"
    document.querySelector(".weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city) { 
  
   const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then(response => response.json())
    
   updateData(data)
}

function search() {
    const city = document.querySelector(".city").value

    searchCity(city)
}
