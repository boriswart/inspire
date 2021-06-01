import { ProxyState } from "../AppState.js"
import Weather from "../Models/Weather.js"
import { weatherService } from "../Services/WeatherService.js"


function _draw() {
    //console.log("Drawing Weather", ProxyState.weather)
    let weatherElem = document.getElementById("weather-app")
    if (ProxyState.weather) {
        weatherElem.innerHTML = ProxyState.weather.weatherTemplate
    }
}

//Public
export default class WeatherController {
    constructor() {
        ProxyState.on("weather", _draw);
        this.getUpdatedWeather()
        //this.toggleTemp()
    }

    getUpdatedWeather() {
        weatherService.getUpdatedWeather()
    }

    toggleTemp() {
        //console.log("Got to toggleTemp")
        weatherService.toggleTemp()
    }
}
