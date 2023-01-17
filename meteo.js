const $ = document
const searchInput = $.querySelector(".search-box")
const mainContainer = $.querySelector("main")
let cityElem = $.querySelector(".city")
let dateElem = $.querySelector(".date")
let tempElem = $.querySelector(".temp")
let weatherElem = $.querySelector(".weather")
let hi_LowElem = $.querySelector(".hi-low")
let humidityElem = $.querySelector(".humidity")
let windElem = $.querySelector(".wind")
let pressureElem =$.querySelector(".pressure")

const fetchURL = "https://api.openweathermap.org/data/2.5/weather?q="
let cityName = null
const apiKey = "8d1ea57f5c7bb682b127c50f23b95b2b"

searchInput.addEventListener("keyup", event =>{
    
	let {keyCode, target:input} = event
	if(keyCode === 13){
		cityName = input.value
		weatherData(cityName)
	}
})

function weatherData(CityName) {
	fetch(`${fetchURL}${CityName}&appid=${apiKey}`)
		.then(res => res.json())
		.then(cityData => {
			console.log(cityData)
			cityElem.innerHTML = `${cityData.name}, ${cityData.sys.country}`
			dateElem.innerHTML = mainDate()
			tempElem.innerHTML = `${Math.floor(cityData.main.temp - 273.15)}<span>°c</span>`
			weatherElem.innerHTML = `${cityData.weather[1].main}`
			hi_LowElem.innerHTML = `Température(min,max): ${Math.floor(cityData.main.temp_min - 273.15)}°c / ${Math.floor(cityData.main.temp_max - 273.15)}°c`
            humidityElem.innerHTML=`humidité: ${cityData.main.humidity} %`
            windElem.innerHTML=`Vitesse du vent: ${cityData.wind.speed} km/h`
            pressureElem.innerHTML=`Pression: ${cityData.main.pressure} hPa`
        })
        
		.catch(err => console.error("city not found"))
}

function mainDate() {
	let weekArray = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
	let monthArray = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]
	let localDate = new Date()
	let day = localDate.getDate()
	let week =  weekArray[localDate.getDay()]
	let month = monthArray[localDate.getMonth()]
	let year = localDate.getFullYear()
	return `${week} ${day} ${month} ${year}`
}

