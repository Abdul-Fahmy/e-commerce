import axios from "axios";
import { createContext, useState } from "react";

export const FilterContext = createContext(null)




export default function FilterProvider({children}){
const [expensive,setExpensive]= useState(null)
const [low, setLow] = useState(null)
        //from expensive to cheap
async function expensiveToCheaper() {
    const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products?sort=-price&limit=56`,
        method: 'Get'
    }
    let {data} = await axios.request(options)
    console.log(data.data);
    setExpensive(data.data)    
}
//cheap to expensive
async function lowToExpensive() {
    const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products?sort=price&limit=56`,
        method: 'Get'
    }
    let {data} = await axios.request(options)
    console.log(data.data);
    setLow(data.data)    
}

    return <FilterContext.Provider
    value={{expensiveToCheaper,lowToExpensive,expensive,low}}
    >{children}</FilterContext.Provider>
}