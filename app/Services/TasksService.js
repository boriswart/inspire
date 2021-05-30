import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"



class TasksService {
    constructor() {
        ProxyState.on('tasks', saveState)
    }

    createTask(name, listId) {
        console.log("Adding a Task", name)
        let newTask = new Task(name, false, listId)
        ProxyState.tasks.push(newTask)
        ProxyState.tasks = ProxyState.tasks
    }

    deleteTask(taskId) {
        let keeperTasks = ProxyState.tasks.filter(x => x.taskId !== taskId)
        ProxyState.tasks = keeperTasks
        ProxyState.lists = ProxyState.lists
    }

    updateTask(taskId, doneChk) {
        let foundTask = ProxyState.tasks.find(x => x.taskId == taskId)
        console.log("Updating the Tasks", taskId, doneChk, ProxyState.tasks)
        foundTask.done ? foundTask.done = false : foundTask.done = true //toggle every click
        console.log("Updated  Tasks", foundTask)
        ProxyState.tasks = ProxyState.tasks
    }



}
export const tasksService = new TasksService()