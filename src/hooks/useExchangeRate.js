import { useEffect, useState } from "react";

function useExchangeRate(currency){

    const [data, setData] = useState({});
    
    useEffect(()=>{

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((response)=>{

            return response.json()
        })
        .then((data)=>{

            setData(data[currency]);
        })

    },[currency]);

    return data;
}

export default useExchangeRate;