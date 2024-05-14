import { useState } from "react"

export default function Count(){
    const [count , setCourt ] = useState(0)  

    const handleAdd = () => {
        const newCount = count + 1;
        setCourt (newCount)
    }
    const handleAdd2 = () => {
        const newCount = count - 1;
        setCourt (newCount)
    }

    return(
        <div style={{border: '2px solid yellow'}}>
            <h3>Count :{count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleAdd2}>Reduce</button>

        </div>
    )
}