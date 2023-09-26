weatherTypes=["☀️","🌧️","🌥️","⛈️","❄️","🌦️","☃️","💨","💧"];

const weatherImg=document.getElementById('weatherImg')
weatherImg.innerText=weatherTypes[0];

const humidityImage = document.getElementById('humidity-image')
humidityImage.innerText=weatherTypes[8]

const windImage = document.getElementById('wind-speed-image')
windImage.innerText=weatherTypes[7]


const inputBox = document.getElementById('inputBox')
const searchBox = document.getElementById('searchBox')
const temperatureData = document.getElementById('temperature-data')
const humidityData = document.getElementById('humidity-data')
const windSpeedData = document.getElementById('wind-speed-data')
const cityName = document.getElementById('city-name')



apikey=`your api key`



async function weatherDetails(city){
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apikey}`)
    var data = await response.json()

    //Updating images 

    if(data.weather[0].main=='Clear')
    weatherImg.innerText=weatherTypes[0]

    if(data.weather[0].main=='Rain')
    weatherImg.innerText=weatherTypes[1]

    if(data.weather[0].main=='Clouds')
    weatherImg.innerText=weatherTypes[2]
    
    if(data.weather[0].main=='Thunderstorm')
    weatherImg.innerText=weatherTypes[3]

    if(data.weather[0].main=='Mist')
    weatherImg.innerText=weatherTypes[4]

    if(data.weather[0].main=='Drizzle')
    weatherImg.innerText=weatherTypes[5]

    if(data.weather[0].main=='Snow')
    weatherImg.innerText=weatherTypes[6]


    //updating data

    cityName.innerText = data.name
    temperatureData.innerText = Math.round(data.main.temp) + "°C"
    humidityData.innerText = data.main.humidity + "%"
    windSpeedData.innerText = data.wind.speed + " km/hr"

    console.log(data)
        
}


searchBox.addEventListener('click',()=>{
    weatherDetails(inputBox.value)
})




