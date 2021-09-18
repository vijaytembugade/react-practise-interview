// h1, h2 ,h3 change

import React, { useState } from 'react'

const QueThree = () => {

    const [input, setInput] = useState()
    const [output, setOutput] = useState()

    
    return (
        <div>
            <input onChange={e=>setInput(e.target.value)}
            />

            <button onClick={()=>setOutput(
                <h1>{input}</h1>
            )}>h1</button>

            <button onClick={()=>setOutput(
                <h2>{input}</h2>
            )}>h2</button>

            <button onClick={()=>setOutput(
                <h3>{input}</h3>
            )}>h3</button>

            {output}
        </div>
    )
}

export default QueThree
