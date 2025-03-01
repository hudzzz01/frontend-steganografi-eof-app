import React, { useContext } from 'react';
import UploadImage from '../componen/UploadImage';
import DisplaySecretMessage from '../componen/DisplaySecretMessage';
import { AppContext } from '../componen/context/AppProvider';
import Loading from '../componen/Loading';

const ExtractPage = () => {
    const {extractedSecredMEssage, isLoading} = useContext(AppContext)


    return (
        <div>
            <form >

                <UploadImage isExtractiEmage={true} />
                {isLoading ? <Loading/> : <></>}
                {extractedSecredMEssage ? <DisplaySecretMessage/> : <></>}
                {/* <DisplaySecretMessage/>  */}

            </form>
        </div>
    );
}

export default ExtractPage;
