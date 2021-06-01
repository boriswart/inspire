export class Task {
    constructor(description, completed, user, id) {
        this.description = description;
        this.type = "Todos"
        this.completed = completed;
        this.user = user
        this.id = id || ("tsk" + Math.floor(Math.random() * 1000))
    }
}