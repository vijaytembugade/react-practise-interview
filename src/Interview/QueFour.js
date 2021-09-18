//text color change
import React, { useState } from 'react'

const QueFour = () => {
    const [input, setInput] = useState();
    const [color, setColor] = useState("black")
    return (
        <div>
            <input onChange={e=>setInput(e.target.value)}/>

            <h2 style={{color:color}}>
            {input}
            </h2>

            <button onClick={()=>setColor("red")}>Red</button>
            <button onClick={()=>setColor("green")}>Green</button>
            <button onClick={()=>setColor("blue")}>Blue</button>
        </div>
    )
}

export default QueFour
