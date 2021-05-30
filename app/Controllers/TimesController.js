import { ProxyState } from "../AppState.js"
import { timesService } from "../Services/TimesService.js"

function _draw() {
    let timeElem = document.getElementById("time-app")
    let d = ProxyState.times
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let strAMPM = "AM"

    h > 12 ? h -= 12 : ""
    h > 12 ? strAMPM = "PM" : strAMPM = "AM"


    timeElem.innerHTML = /*html*/`
  <div id="time-app" class="col-12 T-dark my-5 rounded">
  <h2>Time: </h2>
  <p > ${d} </p>
  <span style='font-size: xx-large; text-center'>
  ${h + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + strAMPM}</span>
  <H1> </H1>
  </div>
`
}




//Public
export default class TimesController {
    constructor() {
        ProxyState.on("times", _draw)
        this.getUpdatedTime()
    }

    getUpdatedTime() {
        //console.log("Getting updated time")
        timesService.getUpdatedTime()
        setInterval(this.getUpdatedTime, 1000)
    }

}