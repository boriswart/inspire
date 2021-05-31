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
        // @ts-ignore
        ProxyState.weather = new Weather(res.data)
        ProxyState.weather = ProxyState.weather
        console.log("Service: Updated get weather", ProxyState.weather)
    }

    toggleTemp() {
        const celsiusConversionConstant = 273.17
        let tempScaler = ProxyState.weather.tempScale
        if (tempScaler == 'k') {
            ProxyState.weather.temp -= celsiusConversionConstant
            ProxyState.weather.feelsLike -= celsiusConversionConstant
            ProxyState.weather.tempScale = "c"
            ProxyState.weather = ProxyState.weather
        } else if (tempScaler == 'c') {
            ProxyState.weather.temp = fahrenheitConversion(ProxyState.weather.temp)
            ProxyState.weather.feelsLike = fahrenheitConversion(ProxyState.weather.feelsLike)
            ProxyState.weather.tempScale = "f"
            ProxyState.weather = ProxyState.weather
        } else if (tempScaler == 'f') {
            ProxyState.weather.temp = celsiusConversion(ProxyState.weather.temp)
            ProxyState.weather.feelsLike = celsiusConversion(ProxyState.weather.feelsLike)
            ProxyState.weather.tempScale = "c"
            ProxyState.weather = ProxyState.weather
        }
    }
}

export const weatherService = new WeatherService
