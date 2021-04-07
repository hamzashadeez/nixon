import React, {useEffect} from 'react'
import './style.css'
import {useHistory, useParams} from 'react-router-dom'
function Flash() {
    const history = useHistory()
    const { name } = useParams()
    useEffect(()=>{
        console.log("param: ",name)
        setTimeout(()=>{
            history.push(`/${name}`)
        }, 1000)
    },[])
    return (
        <div className="main">
            <div className="glass center__them">
                <h1 className='text-info'>Nixon</h1>
                <p className='text-info'>Loading....</p>
            </div>
        </div>
    )
}

export default Flash
