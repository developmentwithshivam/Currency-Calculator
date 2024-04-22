export async function Usecurrencyinfo(currency = "usd") {
        let arr = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        arr = await arr.json();
        return arr;
   
}

