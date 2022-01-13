import React, {useState} from 'react';
import './styles.css';

const BoxDisplay = (props) => {

    
    return (
        <>
        <div>
            <h1> The Boxes </h1>


        {props.createdBoxes.map((color, i) => {

            return <div key = {i} className = "box" style={{backgroundColor: color}}>
                        <input type="checkbox"></input>
                    </div>
        }
        
        )}
        </div>
        </>

    )
}

export default BoxDisplay;