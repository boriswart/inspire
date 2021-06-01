import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

//import { saveState } from "../Utils/LocalStorage.js"

let url = "https://bcw-sandbox.herokuapp.com/api"



class TasksService {


    async getTasks() {
        // @ts-ignore
        let newT = null
        // @ts-ignore
        let res = await axios.get(url + '/william/todos')
        res.data.forEach(t => {
            newT = new Task(t.description, t.completed, t.user, t._id)
            ProxyState.tasks = [...ProxyState.tasks, newT]
        })
    }

    constructor() {
        // ProxyState.on('tasks', saveState)
    }



    async createTask(desc, listId) {
        // @ts-ignore
        let newTask = new Task(desc, false, listId)
        // @ts-ignore
        let res = await axios.post(url + '/william/todos', newTask)
        console.log(res.data)
        newTask = new Task(res.data.description, res.data.completed, res.data.user, res.data._id)
        ProxyState.tasks = [...ProxyState.tasks, newTask]
        console.log("Create: ", ProxyState.tasks)
    }

    async deleteTask(taskId) {
        // @ts-ignore
        let res = await axios.delete(url + '/william/todos/' + taskId)
        console.log(res.data)
        let keeperTasks = ProxyState.tasks.filter(x => x.id !== taskId)
        ProxyState.tasks = keeperTasks
        ProxyState.lists = ProxyState.lists
    }

    async updateTask(taskId, doneChk) {
        //console.log("Post updated todos new-way", taskId)
        let foundTask = ProxyState.tasks.find(x => x.id == taskId)

        foundTask.completed ? foundTask.completed = false : foundTask.completed = true //toggle every click
        // @ts-ignore
        let res = await axios.post(url + '/william/todos', foundTask)

        let keeperTasks = ProxyState.tasks.filter(x => x.id != taskId)
        foundTask = new Task(res.data.description, res.data.completed, res.data.user, res.data._id)
        ProxyState.tasks = [...keeperTasks, foundTask]
        console.log("Update: ", ProxyState.tasks)
        this.deleteTask(taskId)
    }

}
export const tasksService = new TasksService()