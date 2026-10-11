// this is for fetching data, e.g. exchange rates.
export async function ExchangeRates(baseCurrency = "USD") {
    const urlLink = `https://open.er-api.com/v6/latest/${baseCurrency}`;
    const response = await fetch(urlLink);
    if (!response.ok) {
        throw new Error("Could not get exchange rates.");
    }
    const data = await response.json();
    if (data.result !== "success") {
        throw new Error("Exchange rates are unavailable.");
    }

    return data.rates;
}