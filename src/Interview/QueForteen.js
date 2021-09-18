import React from 'react'

const QueForteen = () => {

    const obj1 = {
        name: "Ram",
        age:"25", 
        yuga:"Treta"
    }
    const obj2= {
        name: "Krishna",
        age:"31", 
        yuga:"Dwapar"
    }
    
    function MoreAge(obj1, obj2){
        if(obj1.age > obj2.age){
            return obj1.name
        }else{
            return obj2.name
        }
    }

    console.log(MoreAge(obj1, obj2))
    return (
        <div>
            {MoreAge(obj1, obj2)}
        </div>
    )
}

export default QueForteen
