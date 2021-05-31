import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

//import { saveState } from "../Utils/LocalStorage.js"

let url = "https://bcw-sandbox.herokuapp.com/api"



class TasksService {
    constructor() {
        // ProxyState.on('tasks', saveState)
    }

    createTask(name, listId) {
        console.log("Service: Adding a Task", name, listId)
        let newTask = new Task(name, false, listId)
        ProxyState.tasks.push(newTask)
        ProxyState.tasks = ProxyState.tasks
    }

    deleteTask(taskId) {
        let keeperTasks = ProxyState.tasks.filter(x => x.id !== taskId)
        ProxyState.tasks = keeperTasks
        ProxyState.lists = ProxyState.lists
    }

    updateTask(taskId, doneChk) {
        let foundTask = ProxyState.tasks.find(x => x.id == taskId)
        console.log("Updating the Tasks old-way", taskId, doneChk, ProxyState.tasks)
        foundTask.completed ? foundTask.completed = false : foundTask.completed = true //toggle every click
        console.log("Updated  Tasks - old-way", foundTask)
        ProxyState.tasks = ProxyState.tasks
    }

    // TODO sandbox task to update sandbox

    async updateTasks(taskId, doneChk) {
        //let res = await axios.post(url + "/william/todos")
        console.log("Post todos new-way")
        //ProxyState.tasks.push( new Task(res.data))
        //console.log("Service: Updated tasks", ProxyState.tasks)
    }




}
export const tasksService = new TasksService()