

import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from './context/AppProvider';
import axios from 'axios';


const UploadImage = ({isExtractiEmage}) => {

    const {  
        
        // state for processing deprecable image insert secret message
        setStegaImage, urlImageEmbed, 
        resultOfStegaImageFromServer, setResultOfStegaImageFromServer,
        
        
        // for prosecing extract secret message section
        extractedSecredMEssage,setExtractedSecretMessage ,
        imageWithSecretMessage, setImageWithSecretMessage,
        urlImageEmbedExtract,setUrlImageEmbedExtract,
    


        // for both
        setUrlImageEmbed , setIsAllert, setAllertMessage,
        isLoading, setIsLoading,

        //function
        extractMessageFunction


    } = useContext(AppContext)


    const uploadElementRef = useRef(null)



    function handleOnlcickUploadImage() {
        // const inputFile = document.querySelector("#inputGroupFile01")
        const inputFile = uploadElementRef.current

        // console.log("image chageee"); //terpanggil 2x solve


        inputFile.click();



    }

    function handleOnChangeUploadImage() {

        const inputFile = uploadElementRef.current
        // console.log("image changee");





        if (inputFile.files.length > 0) {

            // console.log(inputFile.files[0]);
            const file = inputFile.files[0];
            const imageUrl = URL.createObjectURL(file);

            // console.log(imageUrl);


          
            const filename = file.name;
            const extensionFile = filename.split(".")[filename.split(".").length - 1]
            let flagSuccesValidation = true;

            console.log(extensionFile);


            try {
                extensionFileValidation(extensionFile)
            } catch (e) {
                console.log(e);
                console.log(extensionFile);


                setIsAllert(true)
                flagSuccesValidation = false;
                setAllertMessage(" Gambar yang dimasukan harus memiliki extensi Jpg, Png atau Web")


                setTimeout(() => {
                    setIsAllert(false)
                    setAllertMessage("")
                }, 1500)
                return

            }

            console.log("aaa");


            //set flag insert or extract message for using component
            if(isExtractiEmage){


                //section extract image
                setImageWithSecretMessage(file)
                setUrlImageEmbedExtract(imageUrl)

           


             
                
                
            }else{

                //section embed image
                setStegaImage(file)
                setUrlImageEmbed(imageUrl)
                

                
            }

            console.log(imageUrl);
            



        } else {
            if(isExtractiEmage){
                setUrlImageEmbedExtract(null)
            }else{
                setStegaImage(null)
            }
            
        }



    }

    function extensionFileValidation(extension) {
        const allowExtension = ['jpg', 'png', 'jpeg']

        if (!allowExtension.includes(extension)) {
            throw Error("extensi harus jpg, png atau jpeg")
        }

    }

    // console.log(urlImageEmbed);

    let imageElement;

    if(isExtractiEmage){
        imageElement = <img src={urlImageEmbedExtract} className='w-100 h-100 rounded'/>
    }else{
        imageElement = <img src={urlImageEmbed} className='w-100 h-100 rounded'/>
    }


    return (
        <div>




            <div onClick={handleOnlcickUploadImage} className='bg-light-brown' aria-expanded="false" aria-controls="collapseSecretMessage">
                <div className='container pt-5 pb-5'>
                    <div className="d-flex justify-content-center color-dark-brown bg-midle-brown rounded">
                       {imageElement}
                    </div>
                </div>



                <div className='d-flex justify-content-center color-dark-brown pb-5'>
                    <p className='fs-1 kanit-light mt-3 ms-5'>Upload {isExtractiEmage ? "Image has hidden message" : "Receptacle" } Image Here</p>
                    <p className='me-4'>Click the image area please</p>
                </div>



            </div>
            <div className='bg-midle-brown rounded'>
                {/* upload section element */}
                <div className="input-group" style={{ visibility: "hidden" }}>
                    <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                    <input ref={uploadElementRef} onChange={() => { handleOnChangeUploadImage() }} type="file" className="form-control" id="inputGroupFile01" />
                </div>
            </div>

        </div>



    );
}

export default UploadImage;
