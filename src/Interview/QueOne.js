// calculator app
import React, {useState} from 'react'

const QueOne = () => {

    const [num1, setnum1] = useState()
    const [num2, setnum2] = useState()

    const [output, setOutput] = useState("")

    function add(){
        setOutput(Number(num1)+Number(num2))
    }
    function sub(){
        setOutput(Number(num1)-Number(num2))
    }
    function into(){
        setOutput(Number(num1)*Number(num2))
    }
    function divide(){
        setOutput(Number(num1)/Number(num2))
    }

    return (
        <div>
            <input type="number" onChange={e=>setnum1(e.target.value)}/>
            <input type="number" onChange={e=>setnum2(e.target.value)}/>
            <div>
                <button onClick={()=>add()}>Add</button>
                <button onClick={()=>sub()}>Subtract</button>
                <button onClick={()=>into()}>Multiply</button>
                <button onClick={()=>divide()}>Divide</button>
            </div>

            <h2>{output}</h2>
        </div>
    )
}

export default QueOne
