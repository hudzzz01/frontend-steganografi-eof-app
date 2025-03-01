import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-midle-brown'>
            <div className='d-flex flex-row flex-wrap justify-content-center align-items-center p-3 gap-2'>
                <div class="spinner-grow color-low-brown" role="status">
                </div>
                <div class="spinner-grow color-dark-brown" style={{height:"3rem", width:"3rem"}} role="status">
                </div>
                <div class="spinner-grow color-low-brown" role="status">
                </div>
            </div>
            <h3 className=' color-low-brown'> Processing image ... </h3>
       



        </div>

    );
}

export default Loading;
