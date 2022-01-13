import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {

  const [currentBox, setCurrentBox] = useState([]);

  const addNewBoxes = ( newBox ) => {


    const newCreatedBoxes = [...currentBox]
    newCreatedBoxes.push(newBox);
    setCurrentBox(newCreatedBoxes);
  }
    
    return (
        <>
            <BoxForm addBoxes={ addNewBoxes } />
            <BoxDisplay createdBoxes={currentBox} />
        </>
    );
}
    
export default App;
