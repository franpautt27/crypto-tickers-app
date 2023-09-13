import { GlobalItem } from "./globalItemInterface";

export interface FetchedTickers {
    data: Ticker[];
    info: Info;
}

export interface Ticker extends GlobalItem {
    symbol:             string;
    name:               string;
    nameid:             string;
    rank:               number;
    price_usd:          string;
    percent_change_24h: string;
    percent_change_1h:  string;
    percent_change_7d:  string;
    price_btc:          string;
    market_cap_usd:     string;
    volume24:           number;
    volume24a:          number;
    csupply:            string;
    tsupply:            null | string;
    msupply:            null | string;
}

export interface Info {
    coins_num: number;
    time:      number;
}
