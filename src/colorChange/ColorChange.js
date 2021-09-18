import React, { useState } from 'react'

const ColorChange = () => {
    const [text, setText] = useState("Hello World")
    const [color, setColor ] = useState("black")

    const myStyles = {
        color : color,
    }

    return (
        <div>
            <input onChange={(e)=> setText(e.target.value)}/>
            <h1 style={myStyles} >{text}</h1>

            <button onClick={()=>setColor("red")}>Red</button>
            <button onClick={()=>setColor("blue")}>Blue</button>

        </div>
    )
}

export default ColorChange
