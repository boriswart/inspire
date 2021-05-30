import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { loadState } from "../Utils/LocalStorage.js"

//Private




//public
export class ListsController {
    constructor() {
        ProxyState.on("lists", this.drawLists)
        ProxyState.on('tasks', this.drawLists)
        this.drawLists()
        loadState()
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
            filteredTasks = ProxyState.tasks.filter(x => x.listId == i.listId)
            numTasks = filteredTasks.length
            completedTasks = filteredTasks.filter(x => x.done == true).length
            template += /*html*/`
            <div class="card col-4 mt-4 text-center">
            <div class="card-header bg-light' ">
            <p style="color:${i.color};font-size:24px;">${i.name}</p>
            <p style="color:${i.color};font-size:14px;">${completedTasks}/${numTasks} </p>
            </div>
               <div class="card-body text-center text-color-#9d2525">
                    <p class="card-text "></p>
                    <div>
                    `
            ProxyState.tasks.forEach(t => {
                template += /*html*/`
                        ${t.listId == i.listId ? '<div class="d-flex flex-wrap sb align-items-center justify-content-around">' : ""}
                        ${t.listId == i.listId ? '<input type="checkbox" class="checkbox" id="donechk" autocomplete="off" onclick="app.TasksController.updateTask(' : ""}
                        ${t.listId == i.listId ? "'" + t.taskId + "','" + t.done + "'" + ')"' : ""}
                        ${t.listId != i.listId ? "" : t.done ? 'checked >' : '>'}
                        ${t.listId == i.listId ? '<label class="checkbox" for="donechk"></label>' : ""}
                        ${t.listId == i.listId ? '<p style="color:' + i.color + ';font-size:12px;">' + t.name + '"</p>' : ""}
                        ${t.listId == i.listId ? '<i class="fa fa-trash" aria-hidden="true" onclick="app.TasksController.removeTask(' : ""}
                        ${t.listId == i.listId ? "'" + t.taskId + "'" + ')"></i></div>' : ""}`
            })

            template += /*html*/`
                    </div>
                    <div class="d-flex sb" >
                        <form onsubmit="app.TasksController.addTask(event,'${i.listId}')">
                            <div class="d-flex align-content-center justify-content-around">    
                                <div><input type="text" class="no-outline"  minlength="3" maxlength="50" size="10" id="newtask${i.listId}" name="name" required/>
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
        document.getElementById("cards-go-here").innerHTML = template
    }


}