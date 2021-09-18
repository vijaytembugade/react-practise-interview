// Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.

import React, { useEffect, useState } from 'react'

const QueSeven = () => {
    const [data, setData] = useState()
    const [error, setError]=useState()

    useEffect(()=>{
        fetch("https://reqres.in/api/users")
            .then(res=>{
                console.log(res)
                if(!res.ok){
                    throw Error("Could not fetch data")
                }
                return res.json()
            })
            .then(data=>setData(data.data))
            .catch(err=>setError(err.message))
    },[])


    return (
        <div>
            {error && <div>{error}</div>}
            {data && !error && data.map(d=>(
                <div>
                <div>{d.email}</div>
                <div>{d.id}</div>
                </div>
            ))}
        </div>
    )
}

export default QueSeven
