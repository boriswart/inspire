import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"

function _draw() {
    //console.log("Drawing Updated quote", ProxyState.quote)
    let quotesElem = document.getElementById("quotes-app")
    if (ProxyState.quote) {
        quotesElem.innerHTML = `
        <div class="myDIV">
      <H5>  ${ProxyState.quote.
                // @ts-ignore
                content}</H5>
        </div>
        <div class="hide">${ProxyState.quote.
                // @ts-ignore
                author}</div>`

        quotesElem.classList.add("text-over-image")
    }
}

//Public
export default class QuotesController {
    constructor() {
        ProxyState.on("quote", _draw);
        this.getUpdatedQuote()
    }

    getUpdatedQuote() {
        quotesService.getUpdatedQuote()
    }

}
