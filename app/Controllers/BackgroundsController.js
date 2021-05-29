import { ProxyState } from "../AppState.js"
import { backgroundsService } from "../Services/BackgroundsService.js"

function _draw() {
    //console.log("Drawing Updated background", ProxyState.background)
    let bodyElem = document.getElementById("body")
    bodyElem.style.backgroundImage = `url('${ProxyState.background}')`
}

//Public
export default class BackgroundsController {
    constructor() {
        ProxyState.on("background", _draw);
        this.getNewBackground()
        _draw()
    }

    getNewBackground() {
        backgroundsService.getNewBackground()
    }

}