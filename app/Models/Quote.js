export default class Quote {
    constructor(content, author, authorSlug) {
        this.content = content;
        this.author = author;
        this.authorslug = authorSlug
    }
    get quoteTemplate() {
        return /*html*/`
                <div class="my-3">
                   <span
                       class="action p-1 rounded-circle"
                       onclick="app.quotesController.getUpdatedQuote('${this.content}')">
                    </span>
                </div>   `
    }
}