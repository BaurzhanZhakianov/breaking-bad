export type Characters = ICharacter[];
export interface ICharacter {
    char_id: number;
    name: string;
    birthday?: string;
    occupation: string[];
    img: string;
    status: string;
    nickname: string;
    appearance: number[];
    portrayed: string;
    category: string;
    better_call_saul_appearance?: number[];
}
export type Episodes = IEpisode[];
export interface IEpisode {
	episode_id: number;
	title: string;
	season: string;
	air_date: string;
	characters: string[];
	episode: string;
	series: string;
}
export type Quotes = IQuote[];
export interface IQuote {
	quote_id: number;
	quote: string;
	author: string;
	series: string;
}
export type Deaths = IDeath[];
export interface IDeath {
	death_id: number;
	death: string;
	cause: string;
	responsible: string;
	last_words: string;
	season: number;
	episode: number;
	number_of_deaths: number;
}
export interface IQuoteParams {
	author: string
}