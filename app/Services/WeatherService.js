import { ProxyState } from "../AppState.js"
import Weather from "../Models/Weather.js"

let url = "https://bcw-sandbox.herokuapp.com/api"

class WeatherService {
    async getUpdatedWeather() {
        // @ts-ignore
        let res = await axios.get(url + "/weather")
        console.log(res.data)
        // @ts-ignore
        ProxyState.weather = new Weather(res.data)
        ProxyState.weather = ProxyState.weather
        console.log("Service: Updated get weather", res.data.main)
    }

}

export const weatherService = new WeatherService
