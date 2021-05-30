import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { tasksService } from "../Services/TasksService.js";
import { loadState } from "../Utils/LocalStorage.js";

//Private

//swal("Are you sure?", {
//    dangerMode: true,
//    //buttons: true,
//});


//Public
export class TasksController {
    constructor() {
        ProxyState.on("tasks", this.drawTasks)
        this.drawTasks()
        loadState()
    }

    addTask(event, listId) {
        event.preventDefault()
        let form = event.target
        console.log("Adding a Task", form.name.value, listId)
        tasksService.createTask(form.name.value, listId)
        form.reset
    }

    drawTasks() {
        console.log("Drawing Tasks from ListController not here")
    }



    removeTask(taskId) {
        if (confirm(`Are you sure you would like to delete task ${taskId} ?`)) {
            console.log("Removing the Tasks", taskId)
            tasksService.deleteTask(taskId)
        }
    }

    updateTask(taskId, doneChk) {
        tasksService.updateTask(taskId, doneChk)
    }
}