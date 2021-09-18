import React, {useEffect, useState} from 'react'

const QueEight = () => {
    const [data, setData] = useState()
    const [err, setErr] = useState()

    useEffect(()=>{
        fetch("https://reqres.in/api/users/2")
        .then(res=>{
            if(!res.ok){
                throw Error("NOT FOUND")
            }
            return res.json()

        }).then(data=>{
            setData(data.data)
            console.log(data.data)
        })
        .catch(err=>{
            console.log(err.message)
            setErr(err.message)
        })
    }, [])

    return (
        <div>
            {err}
            {data && data.id}
                        
        </div>
    )
}

export default QueEight
