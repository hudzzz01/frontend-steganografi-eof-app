import React, { useContext } from 'react';
import UploadImage from '../componen/UploadImage';
import DisplaySecretMessage from '../componen/DisplaySecretMessage';
import { AppContext } from '../componen/context/AppProvider';

const ExtractPage = () => {
    const {extractedSecredMEssage} = useContext(AppContext)
    return (
        <div>
            <form >

                <UploadImage isExtractiEmage={true} />
                {extractedSecredMEssage ? <DisplaySecretMessage/> : <></>}

            </form>
        </div>
    );
}

export default ExtractPage;
