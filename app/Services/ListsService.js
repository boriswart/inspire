import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { saveState } from "../Utils/LocalStorage.js"



class ListsService {
    constructor() {
        ProxyState.on('lists', saveState)
    }

    createList(name, color) {
        console.log("Adding a List", name)
        let newList = new List(name, color)
        ProxyState.lists.push(newList)
        ProxyState.lists = ProxyState.lists
    }

}
export const listsService = new ListsService()