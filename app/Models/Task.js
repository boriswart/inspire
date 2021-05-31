export class Task {
    constructor(name, done, listId, taskId) {
        this.type = name;
        this.completed = done;
        this.user = listId
        this.id = taskId || ("tsk" + Math.floor(Math.random() * 1000))
    }
}