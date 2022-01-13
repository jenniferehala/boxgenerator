import React, { useState } from 'react';

const BoxForm = (props) => {

    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBoxes(color);
        // setColor("");

        console.log(color);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add Color Box</h1>
                <input 
                    type="text" 
                    // value={color} 
                    onChange={ (e) => setColor(e.target.value)} 
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default BoxForm;