import React, { useContext } from 'react';
import { AppContext } from './context/AppProvider';

const DisplaySecretMessage = () => {

    const {

        // for prosecing extract secret message section
        extractedSecredMEssage


    } = useContext(AppContext)

    async function hanldeClickCopyButton(){
        try{

            console.log(extractedSecredMEssage);
            
            await navigator.clipboard.writeText(extractedSecredMEssage)
        }catch(e){
            alert("gagal menyalin text ke clipboard",e.message)
        }
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center bg-light-brown'>

                <div class="card mt-2 border-0 w-100 mx-5 my-5">
                    <div class="card-header bg-low-brown color-dark-brown">
                        Secret message
                    </div>
                    <div class="card-body bg-midle-brown">
                        <blockquote class="blockquote mb-0 color-dark-brown text-center">
                            <p> " {extractedSecredMEssage}" </p>
                            <footer class="blockquote-footer"> some <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                    </div>
                </div>

            </div>

            <div className='d-flex flex-colum justify-content-center rounded bg-light-brown'>
                <button onClick={hanldeClickCopyButton} type='button' className='bg-dark-brown p-2 fs-3 rounded color-light-brown border-0 my-3' >Copy To Clipboard</button>
            </div>

        </div>
    );
}

export default DisplaySecretMessage;
