import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    // to store the data we're retrieving from the API Call
    const [data, setData] = useState({});

    // trigger useEffect, whenever there is change in currency
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)

        // Now provide me the json version of response
        // i.e. the retrieved data (response, res) is now converted into json
        .then( (res) => res.json())
        // now update the values whose key is the currency
        .then( (res) => setData(res[currency]))
    }, currency);
    // the only dependency here useEffect has is: currency

    // for Edu. purpose only, not for production build
    console.log(data);
    // logging

    return data;

}

export default useCurrencyInfo;