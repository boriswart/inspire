export class Task {
    constructor(name, done, listId, taskId) {
        this.name = name;
        this.done = done;
        this.listId = listId
        this.taskId = taskId || ("tsk" + Math.floor(Math.random() * 1000))
    }
}