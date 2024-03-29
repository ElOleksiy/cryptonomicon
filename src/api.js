const API_KEY =
  "9a2e01e570c0b693006d832c67ecc7a80ffbb3ed27cfd73218a1c37395c2584c";

  const tickers = new Map()


  export const getAllCurrencyList = () =>
  fetch(`https://min-api.cryptocompare.com/data/all/coinlist`).then((res) =>
    res.json()
  );

  const websocket = new WebSocket('wss://streamer.cryptocompare.com/v2')

  export const subscribeToTicker = (ticker, cb) => {
    if(!tickers.has(ticker)) {
      tickers.set(ticker)
    }
  }

  export const unsubscribeFromTicker = () => {

  }