document.querySelector('#search').addEventListener('submit', async (event) => {
    event.preventDefault();

    
    const apiKey = '979c397a11f01e27f0e4850f9fc6a57b';
    const cityName = document.querySelector('#city-name').value;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`;

    const results = await fetch(apiUrl);
    const json = await results.json();

    if (json.cod === 200) {
        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min,
            description: json.weather[0].description,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            humidity: json.main.humidity,
        });
    } else {
        alert('Não foi possível localizar...')
    }
});

function showInfo(json){

    document.querySelector('#weather').classList.add('show');

    document.querySelector('#title').innerHTML = `${json.city}, ${json.country}`;
    document.querySelector('#temp').innerHTML = `${json.temp.toFixed(1).toString().replace('.', ',')} <sup>C°</sup>`;
    document.querySelector('#temp-min').innerHTML = `${json.tempMin.toString().replace('.', ',')}`;
    document.querySelector('#temp-max').innerHTML = `${json.tempMax.toString().replace('.', ',')}`;
    document.querySelector('#wind').innerHTML = `${json.windSpeed} km/h`;
    document.querySelector('#description').innerHTML = `${json.description}`;

}

