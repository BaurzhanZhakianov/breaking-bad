import {Characters, Deaths, Episodes, IQuote, IQuoteParams, Quotes} from "../../types";
import axios from "axios";

export default class BreakingBad {
    private _BASE_URL = "https://www.breakingbadapi.com/api/";

    private _transformName(name: string) {
        return name.split(' ').join('+')
    }

    private async _getResource<T>(url: string) {
        try {
            const response = await axios.get<T>(`${this._BASE_URL}/${url}`);
            return response.data
        } catch (e) {
            console.log(e);
        }
    }

    async getCharacters() {
        return await this._getResource<Characters>('characters')
    }

    async getEpisodes() {
        return await this._getResource<Episodes>('episodes')
    }

    async getQuotes() {
        return await this._getResource<Quotes>('quotes')
    }

    async getDeaths() {
        return await this._getResource<Deaths>('death')
    }

    async getQuote(params: IQuoteParams) {
        return await this._getResource<Quotes>(`quote?author=${this._transformName(params.author)}`)
    }


}