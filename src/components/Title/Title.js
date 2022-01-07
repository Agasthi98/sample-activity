import React from 'react'
import Data from '../../data.json'
import './Title.css'

const Title = () => {
    return (
        <div className='title'>
            <h1>{Data.title}</h1>
           
        </div>
    )
}

export default Title