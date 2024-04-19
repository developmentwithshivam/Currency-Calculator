export async function Usecurrencyinfo(currency = "usd") {
    // currency = currency||"usd";
    let rupees = "inr"
    // console.log("my name is");
    // let arr = fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    // .then((res)=> res.json())
    // .then((res)=>{
    //     // console.log(res);
    //     // console.log(currency);
    //     // console.log(res[currency].rupees);
    //     // console.log(Object.keys(res.usd));
    //     console.log(arr);
    //     return res;
    // } )
    // // return arr;
    
   
        let arr = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        arr = await arr.json();
        // console.log(arr);
        return arr;
   
}
Usecurrencyinfo();

