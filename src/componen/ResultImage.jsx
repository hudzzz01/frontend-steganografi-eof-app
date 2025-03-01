import React, { useContext } from 'react';
import { AppContext } from './context/AppProvider';
import imageThumnail from '../assets/maskot_login.png'

const ResultImage = () => {

    const { resultOfStegaImageFromServer } = useContext(AppContext)

    let urlImage;

    if (resultOfStegaImageFromServer) {
        urlImage = resultOfStegaImageFromServer
    } else {
        urlImage = imageThumnail
    }


    function handleClickDownlad(){

        alert("terimakasih telah menggunakan app hudzaifah")
    }


    return (
        <div>

            <div onClick={() => { }} className='bg-light-brown' aria-expanded="false" aria-controls="collapseSecretMessage">
                <div className='container pt-5 pb-5'>
                    <div className="d-flex justify-content-center color-dark-brown bg-midle-brown rounded">
                        <img src={urlImage} className='w-100 h-100 rounded' />
                    </div>
                </div>


                <div className='d-flex justify-content-center'>
                    <div className='d-flex flex-column justify-content-center color-dark-brown pb-5'>
                        <p className='fs-1 kanit-light'>Result Image</p>
                        <button type='button' onClick={handleClickDownlad} className='rounded bg-dark-brown color-light-brown border-0 fs-4'>Download</button>
                    </div>
                </div>




            </div>
        </div>
    );
}

export default ResultImage;
