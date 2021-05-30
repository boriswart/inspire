import { ProxyState } from "../AppState.js"

class TimesService {
    getUpdatedTime() {
        ProxyState.times = new Date()
        ProxyState.times = ProxyState.times
    }
}

export const timesService = new TimesService();