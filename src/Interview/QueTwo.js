//font size change

import React, { useState } from 'react'

const QueTwo = () => {

    const [size, setSize] = useState(14)
    const [inputText, setInputText] = useState()

    const myStyle={
        fontSize : `${size}px`,
        padding: "10px",
    }

    return (
        <div>
            <input style={myStyle} onChange={e=>setInputText(e.target.value)}/>

            <div >
                {inputText}
            </div>


            <div>
                <button onClick={()=>setSize(size+2)}>+2</button>
                <button onClick={()=>setSize(size-4)}>-2</button>
            </div>




            
        </div>
    )
}

export default QueTwo
