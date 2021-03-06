export default class Weather {
    constructor(data) {
        this.main = data.weather[0].main
        this.description = data.weather[0].description
        this.base = data.base
        this.temp = data.main.temp_max
        this.feelsLike = data.main.feels_like
        this.tempScale = 'k'

    }
    get weatherTemplate() {
        return  /*html*/`
            <div class="myDIV col-lg-4 offset-8 text-over-image p-3">
                <h5><div>Condition:  ${this.main}</div></h5>
                <h5><div>${this.description}</div></h5>
                <h5><span class="" onclick="app.weatherController.toggleTemp()">Temp: ${this.temp} ${this.tempScale}</span></h5>
                <h5><div>Feels like: ${this.feelsLike} ${this.tempScale}</div></h5>
            </div>
        `
    }

}

//{ 
//"coord": { "lon": -116.2035, "lat": 43.6135 },
//"weather": [{ 
//              "id": 800, 
//             "main": "Clear", 
//        "description": "clear sky",
//                "icon": "01n" }], 
//
// "base": "stations",
//  "main": { 
//                 "temp": 286.38, 
//           "feels_like": 284.96, 
//             "temp_min": 283.6, 
//             "temp_max": 288.72, 
//             "pressure": 1018, 
//              "humidity": 46 }, 
// "visibility": 10000, 
//       "wind": { 
//                 "speed": 1.55, 
//                   "deg": 52, 
//                  "gust": 1.59 }, 
//     "clouds": { 
//                    "all": 0 }, 
//         "dt": 1622264335, 
//        "sys": 
//                  { "type": 2, 
//                      "id": 2005744, 
//                  "country": "US",
//                  "sunrise": 1622203715, 
//                   "sunset": 1622258163 }, 
//  "timezone": -21600, 
//        "id": 5586437,
//        "name": "Boise", 
//         "cod": 200 }