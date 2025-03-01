import React, { useContext } from 'react';
import { AppContext } from './context/AppProvider';

const InsertSecretMessage = () => {
    const { stegaImage, setSecretMessage } = useContext(AppContext)
    console.log(stegaImage);
    
    function handleChange (e){
        // console.log(e.target.value);
        setSecretMessage(e.target.value)
        
    }

    return (
        <div className='mb-10 '>
            <div className="collapse show" >
                <div className="card card-body  bg-low-brown">
                    <div className="input-group">
                        <span className="input-group-text bg-dark-brown color-light-brown kanit-light fs-8 rounded border-0"> <label htmlFor="inputMessage">
                             Masukan Pesan Rahasia disini :
                            </label>
                
                            </span>
                        <input type="text" aria-label="First name" class="form-control bg-light-brown border-0 rounded" id='inputMessage' onChange={(e)=>{handleChange(e)}} />
                        <button className='bg-dark-brown color-light-brown rounded border-0'>
                            Push Me !
                        </button>
             
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InsertSecretMessage;
