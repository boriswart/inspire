import { ProxyState } from "../AppState.js"
import Weather from "../Models/Weather.js"

let url = "https://bcw-sandbox.herokuapp.com/api"

function fahrenheitConversion(degreesCelsius) {
    return degreesCelsius * 9 / 5 + 32
}

function celsiusConversion(degreesFahrenheit) {
    return (degreesFahrenheit - 32) * 5 / 9
}


class WeatherService {
    async getUpdatedWeather() {
        // @ts-ignore
        let res = await axios.get(url + "/weather")
        //console.log(res.data)
        ProxyState.weather = new Weather(res.data)
        ProxyState.weather = ProxyState.weather
        console.log("Service: Updated get weather", ProxyState.weather)
    }

    toggleTemp() {
        const celsiusConversionConstant = 273.17
        let tempScaler = ProxyState.weather.tempScale
        let temperature = 0
        if (tempScaler == 'k') {
            temperature = ProxyState.weather.temp - celsiusConversionConstant
            ProxyState.weather.temp = temperature.toFixed(2)
            temperature = ProxyState.weather.feelsLike - celsiusConversionConstant
            ProxyState.weather.feelsLike = temperature.toFixed(2)
            ProxyState.weather.tempScale = "c"
            ProxyState.weather = ProxyState.weather
        } else if (tempScaler == 'c') {
            ProxyState.weather.temp = fahrenheitConversion(ProxyState.weather.temp).toFixed(2)
            ProxyState.weather.feelsLike = fahrenheitConversion(ProxyState.weather.feelsLike).toFixed(2)
            ProxyState.weather.tempScale = "f"
            ProxyState.weather = ProxyState.weather
        } else if (tempScaler == 'f') {
            ProxyState.weather.temp = celsiusConversion(ProxyState.weather.temp).toFixed(2)
            ProxyState.weather.feelsLike = celsiusConversion(ProxyState.weather.feelsLike).toFixed(2)
            ProxyState.weather.tempScale = "c"
            ProxyState.weather = ProxyState.weather
        }
    }
}

export const weatherService = new WeatherService
