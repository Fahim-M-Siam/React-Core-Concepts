/* eslint-disable no-empty-pattern */
// @ts-nocheck
import { useState } from "react"

// @ts-nocheck
export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }

    const counterStyle = {
        border: '2px solid yellow',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }


    return (
        <div style={counterStyle}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}