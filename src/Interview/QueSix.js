import React from 'react'

const QueSix = () => {
    const [hide, setHide] = React.useState("block");

    const myStyles = {
        display : hide,
    }

    const toggleStyle = ()=>{
        if(hide === "block"){
            setHide("none")
        }else{
            setHide("block")
        }
    }
    return (
        <div>
            <div style={myStyles}>Text loading ..... </div>
            <button onClick={()=>toggleStyle()}>Loaded</button>
        </div>
    )
}

export default QueSix
