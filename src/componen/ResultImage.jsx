import React, { useContext } from 'react';
import { AppContext } from './context/AppProvider';
import imageThumnail from '../assets/maskot_login.png'
import axios from 'axios';

const ResultImage = () => {

    const { resultOfStegaImageFromServer } = useContext(AppContext)

    

    let urlImage,key,downloadUrl;

    if (resultOfStegaImageFromServer) {
        urlImage = `http://localhost:8888/api/v1/steganografy/read/stegano-image/${resultOfStegaImageFromServer.name}`
        key = resultOfStegaImageFromServer.key
        downloadUrl = `http://localhost:8888/api/v1/steganografy/download/stegano-image/${resultOfStegaImageFromServer.name}`
        
    } else {
        urlImage = imageThumnail
    }


    async function handleClickDownlad(){
        
        try{
            window.open(downloadUrl, "_blank");
            console.log("berhasil mengunduh gammbar");
            
        }catch(e){
            console.log("kesalahan dalam melakukan downlad ", e);
            
        }

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
                        <p> key = {key}</p>
                        <button type='button' onClick={handleClickDownlad} className='rounded bg-dark-brown color-light-brown border-0 fs-4'>Download</button>
                    </div>
                </div>




            </div>
        </div>
    );
}

export default ResultImage;
