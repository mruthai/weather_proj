const weatherContainer = document.getElementById('results')


async function weatherCityApi(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    const data = await response.json()
    console.log(data)
    
    // Convert kelvin to farhenhiet 
    temp = (data.main.temp - 273.15) * 9/5 + 32
    tempMin = (data.main.temp_min - 273.15) * 9/5 + 32
    tempMax = (data.main.temp_max - 273.15) * 9/5 +32

    // Convert wind degrees to compass direction
    let wDirect = ['N','NE','E','SE','S','SW','W','NW']
    data.wind.deg += 22.5
    if (data.wind.deg < 0) {
        data.wind.deg = 360 - Math.abs(data.wind.deg) % 360
    } else {
        data.wind.deg = data.wind.deg % 360
    }
    let direct = parseInt(data.wind.deg / 45)
    
    // let weatherIcon = data.weather[0].main
    // if (weatherIcon == 'Rain') {
    //     return 
    // }
    // console.log(weatherIcon)


    

    weatherContainer.innerHTML = ``
    weatherContainer.innerHTML = `
        <div class="molecules">   
            <h2>${data.name}</h2>
            <h4>${data.weather[0].main} </h4>
            <h4><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"></h4> 
            <h4> Current ~ ${Math.round(temp)} ℉ </h4>
            <h4>${Math.round(tempMin)} ℉ | ${Math.round(tempMax)} ℉ </h4>
            <h4> Humidity: ${data.main.humidity} %</h4>
            <h4>${Math.round(data.wind.speed * 2.23964)} mph |  ${wDirect[direct]} </h4>
        </div>
    
    
    `
    
}

// console.log(weatherCityApi('Moline'))

const citySearchForm = document.getElementById('citySearch')

citySearchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const userInput = citySearchForm.querySelector('#userSearchCity')
    weatherCityApi(userInput.value)
    userInput.value = ''

})

// const 
// function mainWeatherImage() {
//     if ${data.weather[0].main} == 
// }


/*  

Try to index the API icon value and display icon from weather url reference

async function weatherIcon(iconImage) {
     return await fetch (``)
const digit = await fetch(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

}
console.log(weatherIcon('50n'))

weatherIcon(data.weather[0].icon)

*/