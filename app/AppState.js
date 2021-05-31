import Quote from "./Models/Quote.js"
import Weather from "./Models/Weather.js"
import { List } from "./Models/List.js"
import { Task } from "./Models/Task.js"


import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Quote[]} */
  // @ts-ignore
  quote = null
  //new Quote("Everything is beautiful ... In its on way", "The Association", "Music ASCAP")


  /** @type {Weather} */
  weather = null

  /** @type string*/
  background = "http://webneel.com/wallpaper/sites/default/files/images/08-2013/23-3d-beach-sand-wallpaper.jpg"

  //Todos ... imported Lists and Tasks from task-manager

  /** @type {Task[]} */
  tasks = []

  /** @type {List[]} */
  lists = [new List("Todo", "#656565")]

  times = new Date()


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
