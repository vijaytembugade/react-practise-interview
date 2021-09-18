//Here's an API, it can give two errors. Either 404, or 401. If the error is 404, show the user 'page not found' and if the error is 401, show the user 'you are not logged in'.

import React,{useEffect, useState} from 'react'

const QueNine = () => {
    const [data, setdata] = useState()
    const [error, setError] = useState()

    useEffect(()=>{
        fetch("https://reqres.in/api/unknown/23")
        .then(res=>{
            if(res.status === 404){
                throw Error("page not found")
            }else if(res.status === 401){
                throw Error("you are not logged in")
            }
            return res.json()
        })
        .then(data=>{
            setdata(data)
        })
        .catch(err=>{
            setError(err.message)
            console.log(err)
        })
    })
    return (
        <div>
            {error}
            {data }
        </div>
    )
}

export default QueNine
