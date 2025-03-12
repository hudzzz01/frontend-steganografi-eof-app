import React, { useContext } from 'react';
import UploadImage from '../componen/UploadImage';
import DisplaySecretMessage from '../componen/DisplaySecretMessage';
import { AppContext } from '../componen/context/AppProvider';
import Loading from '../componen/Loading';
import InsertKey from '../componen/InsertKey';
import axios from 'axios';
import Quotes from '../componen/Quotes';

const ExtractPage = () => {
    const {extractedSecredMEssage,setExtractedSecretMessage, isLoading, imageWithSecretMessage,key, setIsLoading } = useContext(AppContext)

    async function handleSubmit(e){
        e.preventDefault()
        
        setIsLoading(true)
        // setTimeout(()=>{
        //     setIsloading(false)
        //     setResultOfStegaImageFromServer(urlImageEmbed)
        // },2000)

        const formData = new FormData()

        // console.log(imageWithSecretMessage);
        // console.log(key);

      
        
        

        formData.append("stega-image", imageWithSecretMessage)
        formData.append("integer-key", key)

        // send to backend

        const beHost = import.meta.env.VITE_BE_HOST
        console.log(beHost, " ini be");
        
        const uploadUrl = `${beHost}/api/v1/steganografy/steganografi/extractSecretTextFromImage`;
      

        try{
            const res = await axios.post(  
                uploadUrl,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                },

            )

            const resultSecretMessage = res.data.data.secretMessage

            setExtractedSecretMessage(resultSecretMessage)
           
            setIsLoading(false)

            // console.log(fileName);
            
      
            
            
            
        }catch(e){
            console.log("gagal");

            alert("Cant conent to the backend")
            
            console.log(e);
            
        }

        
    }


    return (
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}} >

                <UploadImage isExtractiEmage={true} />
                {imageWithSecretMessage ?   <InsertKey/>  : <></>}
                {isLoading ? <Loading/> : <></>}
             
                {extractedSecredMEssage ? <DisplaySecretMessage/> : <></>}
                <Quotes/>
    

            </form>
        </div>
    );
}

export default ExtractPage;
