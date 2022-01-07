import React from "react";
import Data from '../../data.json'
import './Pharagraph.css'


const Pharagraphs = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col">
                <h3>{Data.pharagraph[0]}</h3>
                </div>
                <div className="col">
                <h3>{Data.pharagraph[1]}</h3>
                </div>
                <div className="col">
                <h3>{Data.pharagraph[2]}</h3>
                </div>
            </div>
        </div>



    )
}

export default Pharagraphs

