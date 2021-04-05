import React, {useEffect} from 'react'
import './style.css'
import {useHistory} from 'react-router-dom'
function Flash() {
    const history = useHistory()
    useEffect(()=>{
        setTimeout(()=>{
            history.push("/")
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
