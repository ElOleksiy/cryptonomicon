const API_KEY =
  "9a2e01e570c0b693006d832c67ecc7a80ffbb3ed27cfd73218a1c37395c2584c";

  export const getAllCurrencyList = () =>
  fetch(`https://min-api.cryptocompare.com/data/all/coinlist`).then((res) =>
    res.json()
  );