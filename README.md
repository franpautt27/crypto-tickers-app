# Crypto Tickers App
Crypto Tickers app that fetch and lists data from the coin API: https://www.coinlore.com/cryptocurrency-data-api

If you want to stay tuned about Cryptocurrency and Forex markets, this app is for you!

![XRecorder_18092023_150419(1)](https://github.com/franpautt27/crypto-tickers-app/assets/58583172/ea7058e3-33ea-4ae2-ad44-ec15d1f7e6b1)

The App loads lazily the tickers data from the paginated API, in a way that only requests the next 100 tickers when are needed to display (reaching at the bottom of the list)

## Filter by Name or Id feature
If you want to just go to a specific coin, you can filter all the results by the coin name or Id! The search featre implements a debounced text value that only reacts when the user stops typing for 500 ms. In that way, the filtered list isn't over-rendered every time the user types a new character in their keyboard.
![FilterCryptoApp](https://github.com/franpautt27/crypto-tickers-app/assets/58583172/da52fcfb-c9d0-4bb5-a765-38aeb898cd37)


## Warning
When using the filter functionality by name, at first it loads *all* the coin data from the API recursively (since the API is all paginated), for that reason, the loading here takes a really long time. I understand that this is totally a bad practice, so I recommend to the CoinLore team (owners of the Crypto API) to create an endpoint where users can filter by name or parts of their name according to a string.

![FilterCryptoDelay](https://github.com/franpautt27/crypto-tickers-app/assets/58583172/7df87382-4e4b-466a-901c-66f2363f2520)

However, this long loading only occurs at the beginning (when you first press the search bar icon) since once all data is fetched, is saved in a redux Global State, so there is no reason to upload all that heavy information again.
