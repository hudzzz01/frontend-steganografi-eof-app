import React, { useContext } from 'react';
import { AppContext } from './context/AppProvider';

const InsertKey = () => {
    const { setKey } = useContext(AppContext)

    function hanldeOnChange(e) {
        // console.log(e.target.value);
        setKey(e.target.value)

    }

    return (
        <div className='d-flex justify-content-center bg-light-brown color-dark'>
            <div className='text-center fs-3'>
               
                <div id="passwordHelpBlock" class="form-text">
                    Insert your secret Key !
                </div>
                <input onChange={(e) => hanldeOnChange(e)} type="number" id="inputPassword5" className="form-control border-0" placeholder='ex. 0' aria-describedby="passwordHelpBlock" />
            </div>

        </div>

    );
}

export default InsertKey;
