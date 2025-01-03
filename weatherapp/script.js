let getweather=async(city)=>{
    let weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=674bbdbe38c1071b9c75c47a799bbef4&units=metric`;

    let weatherobj=await fetch(weatherAPI);
    let response=weatherobj.json();
    return response;
}

function searchCity(){
    document.querySelector(".weather-details").style.display = 'block';
    document.querySelector(".weather").style.display = 'block';    
    const city=document.getElementById("city-input").value;
getweather(city).then((response)=>{
    console.log(response);
    showWeatherData(response);
    showWeather(response);
    
})
.catch((err)=>{
    console.log(err);
})
}
showWeatherData=(weatherData)=>{
    document.getElementById("city-name").innerText=weatherData.city.name;
    document.getElementById("date").innerHTML=`<p><strong>DATE:</strong>${weatherData.list[0].dt_txt}</p>`;
    document.getElementById("temperature").innerHTML=`<p><strong>Temperature:</strong> ${weatherData.list[0].main.temp}°C</p>`;
    document.getElementById("description").innerHTML = `<strong>Description:</strong> ${weatherData.list[0].weather[0].description}`;

    document.getElementById("humidity").innerHTML=`<p><strong>Humidity:</strong> ${weatherData.list[0].main.humidity}%</p>`;
    document.getElementById("wind-speed").innerHTML=`<p><strong>Wind Speed:</strong> ${weatherData.list[0].wind.speed} m/s</p>`;
/*const weatherHTML=`
<p><strong>Temperature:</strong> ${weatherData.main.temp}°C</p>
        <p><strong>Feels Like:</strong> ${weatherData.main.feels_like}°C</p>
        <p><strong>Weather:</strong> ${weatherData.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${weatherData.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${weatherData.wind.speed} m/s</p>`;
        document.getElementById("weather-details").innerHTML = weatherHTML;*/
    }
    showWeather = (weather) => {
        const forecast = document.querySelector(".forecast-container");
        forecast.innerHTML = '';

        // Loop through the weather data, with a step of 4 to get forecasts for every 4th item
        for (let i = 5; i < weather.list.length; i += 8){
            // Create the HTML for the weather details
            const weatherHTML = `
                <div class="forecast-item">
                <p><strong>DATE:</strong> ${weather.list[i].dt_txt}</p>
                    <p><strong>Temperature:</strong> ${weather.list[i].main.temp}°C</p>
                    <p><strong>Feels Like:</strong> ${weather.list[i].main.feels_like}°C</p>
                    <p><strong>Weather:</strong> ${weather.list[i].weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${weather.list[i].main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${weather.list[i].wind.speed} m/s</p>
                </div>
            `;
            
            // Append the HTML to the forecast container
            forecast.innerHTML +=weatherHTML;
        }
    };
    