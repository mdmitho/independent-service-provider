import { useEffect, useState } from "react"

const useDentist =()=>{
    const [services , setServices] = useState([])

    useEffect(()=> {
        fetch('dentist.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return [services ,setServices]
}
export default useDentist