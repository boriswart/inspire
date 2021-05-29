import Quote from "./Models/Quote.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Quote[]} */
  // @ts-ignore
  quote = null
  //new Quote("Everything is beautifull ... In its on way", "The Association", "Music ASCAP")

  weather = null

  /** @type string*/
  background = "http://webneel.com/wallpaper/sites/default/files/images/08-2013/23-3d-beach-sand-wallpaper.jpg"
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
