const apiKey = '579d5d59e9ae8318b4f83d1f3ad3e6c8';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    
    try {
        var data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humid').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/hr';
        
        if (data.weather[0].main =='Clouds'){
            weatherIcon.src = 'images/clouds.png' 
        }
        else if (data.weather[0].main =='Clear'){
            weatherIcon.src = 'images/clear.png' 
        }
        else if (data.weather[0].main =='Rain'){
            weatherIcon.src = 'images/rain.png' 
        }
        else if (data.weather[0].main =='Drizzle'){
            weatherIcon.src = 'images/drizzle.png' 
        }
        else if (data.weather[0].main =='Mist'){
            weatherIcon.src = 'images/mist.png' 
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = "none";
        console.log(response.status);
        console.log(response);
        
    }
    catch (error) {
        //if (response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";

        //}
        document.querySelector('.error-message').innerHTML = `${response.status}: ${response.statusText} <br/> ${error.message}`
    }

    
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
