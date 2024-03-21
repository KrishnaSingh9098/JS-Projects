const apiKey ='53b2826467b9a614b2a757f0129a0a66';
const  apiUrl="https://api.openweathermap.org/data/2.5/weather?q={bhopal}&appid={53b2826467b9a614b2a757f0129a0a66}";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button ");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response  = await fetch(apiUrl + city +`&appid=${apiKey}`)

    if(response.status == 404){
        document.querySelector(".error").computedStyleMap.display = "block";
        document.querySelector(".weather").computedStyleMap.display = "none"
    }
    else{

    }
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHtml = data.name;
    document.querySelector(".temp").innerHtml = data.main.temp;
    document.querySelector(".humidity").innerHtml = data.main.humidity;
    document.querySelector(".wind").innerHtml = data.main.wind;
}

checkWeather()





