import { ProxyState } from "../AppState.js"
//import Background from "../Models/Background.js"

let url = "https://bcw-sandbox.herokuapp.com/api"

class BackgroundsService {

    async getNewBackground() {
        // @ts-ignore
        let res = await axios.get(url + "/images")
        ProxyState.background = res.data.url
        //ProxyState.background = ProxyState.background
        //console.log("Service: Updated background", res.data.url)

    }

}

export const backgroundsService = new BackgroundsService();





