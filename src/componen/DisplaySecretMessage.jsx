import React, { useContext } from 'react';
import { AppContext } from './context/AppProvider';

const DisplaySecretMessage = () => {

    const {  
         
        // for prosecing extract secret message section
        extractedSecredMEssage


    } = useContext(AppContext)


    return (
        <div>
            ini adalah secret message : {extractedSecredMEssage}
        </div>
    );
}

export default DisplaySecretMessage;
