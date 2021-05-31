import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
//import { loadState } from "../Utils/LocalStorage.js"

//Private




//public
export default class ListsController {
    constructor() {
        ProxyState.on("lists", this.drawLists)
        ProxyState.on('tasks', this.drawLists)
        this.drawLists()
        //loadState()
    }

    addList(event) {
        event.preventDefault()
        let form = event.target
        console.log("Adding a List", form.name.value)
        listsService.createList(form.name.value, form.color.value)
        form.reset()
    }

    removeList(listId) {
        console.log("Removing the List", listId)
        if (confirm(`Are you sure you would like to delete list ${listId} ?`)) {
            let keeperLists = ProxyState.lists.filter(x => x.listId !== listId)
            ProxyState.lists = keeperLists
            ProxyState.lists = ProxyState.lists
        }
    }


    drawLists() {
        console.log("Drawing the list", ProxyState.lists)
        let filteredTasks
        let numTasks = 0
        let completedTasks = 0

        let template = ''
        ProxyState.lists.forEach(i => {
            console.log("List Draw", i.listId)
            filteredTasks = ProxyState.tasks.filter(x => x.listId == i.listId)
            numTasks = filteredTasks.length
            completedTasks = filteredTasks.filter(x => x.done == true).length
            template += /*html*/`
            <div class="col mt-4 text-center align-content-center">
               <div class=" my-1 rounded">
                 <p style="font-size:24px;">Todo:</p>
                 <p style="font-size:14px;">${completedTasks}/${numTasks} </p>
               </div>
               <div class="col text-center">
                    <p></p>
                    <div>
                    `
            ProxyState.tasks.forEach(t => {
                template += /*html*/`
                        ${t.listId == i.listId ? '<div class="d-flex flex-wrap sb align-content-center justify-content-around">' : ""}
                        ${t.listId == i.listId ? '<input type="checkbox" class="checkbox" id="donechk" autocomplete="off" onclick="app.tasksController.updateTask(' : ""}
                        ${t.listId == i.listId ? "'" + t.taskId + "','" + t.done + "'" + ')"' : ""}
                        ${t.listId != i.listId ? "" : t.done ? 'checked >' : '>'}
                        ${t.listId == i.listId ? '<label class="checkbox" for="donechk"></label>' : ""}
                        ${t.listId == i.listId ? '<p style="font-size:22px;">' + t.name + '"</p>' : ""}
                        ${t.listId == i.listId ? '<i class="fa fa-trash" aria-hidden="true" onclick="app.tasksController.removeTask(' : ""}
                        ${t.listId == i.listId ? "'" + t.taskId + "'" + ')"></i></div>' : ""}`
            })

            template += /*html*/`
                    </div>
                    <div class="col d-flex" >
                        <form onsubmit="app.tasksController.addTask(event,'${i.listId}')">
                            <div class="d-flex align-content-center justify-content-around">    
                                <div><input type="text" class="no-outline"  minlength="3" maxlength="50" size="20" id="newtask${i.listId}" name="name" required/>
                                <label class="text " for="newtask"></label></div>
                                <div><button type="submit" class="btn btn-primary">+</button></div>
                                <div><span><i class="fa fa-trash" aria-hidden="true" onclick="app.ListsController.removeList('${i.listId}')"></i></span></div>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
             `
        })
        document.getElementById("todos-app").innerHTML = template
    }


}