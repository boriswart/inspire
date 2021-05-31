export class List {
    constructor(name, color, listId) {
        this.name = name;
        this.color = color;
        this.listId = listId || "william"
        console.log(this.name, this.listId)

    }
}