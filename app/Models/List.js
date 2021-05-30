export class List {
    constructor(name, color, listId) {

        this.name = name;
        this.color = color;
        this.listId = listId || ("lst" + Math.floor(10000 * Math.random()))

    }
}