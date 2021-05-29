import { ProxyState } from "../AppState.js"
import Quote from "../Models/Quote.js"

let url = "https://bcw-sandbox.herokuapp.com/api"

class QuotesService {
    async getUpdatedQuote() {
        // @ts-ignore
        let res = await axios.get(url + "/quotes")
        //console.log(res.data)
        // @ts-ignore
        ProxyState.quote = new Quote(res.data.content, res.data.author, res.data.authorslug)
        ProxyState.quote = ProxyState.quote
        //console.log("Service: Updated quote", res.data.content, ProxyState.quote)

    }


}

export const quotesService = new QuotesService();