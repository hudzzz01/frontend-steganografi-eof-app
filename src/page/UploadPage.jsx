import { useContext, useState } from "react";
import InsertSecretMessage from "../componen/InsertSecretMessage";
import UploadImage from "../componen/UploadImage";
import { AppContext } from "../componen/context/AppProvider";
import ResultImage from "../componen/ResultImage";
import Loading from "../componen/Loading";
import axios from "axios";
import Quotes from "../componen/Quotes";

export default function UploadPage() {

    const { stegaImage,secretMessage, urlImageEmbed, setResultOfStegaImageFromServer, resultOfStegaImageFromServer  } = useContext(AppContext)
    
    const [isLoading, setIsloading] = useState(false);
    
    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Pesan Rahasia:", secretMessage, stegaImage);

        setIsloading(true)
        // setTimeout(()=>{
        //     setIsloading(false)
        //     setResultOfStegaImageFromServer(urlImageEmbed)
        // },2000)

        const formData = new FormData()

        formData.append("actual-image", stegaImage)
        formData.append("message", secretMessage)

        // send to backend

        const beHost = import.meta.env.VITE_BE_HOST
        const uploadUrl = `${beHost}/api/v1/steganografy/steganografi/insertTextToImage`;

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

            const stegaImageResponse = res.data.data.stegaImageResponse

            
          
            
            
            const fileName = stegaImageResponse.name;
            const key = stegaImageResponse.key;
            setResultOfStegaImageFromServer({
                name : fileName,
                key : key
            })
            setIsloading(false)

            // console.log(fileName);
            
      
            
            
            
        }catch(e){
            console.log("gagal");

            alert("Cant conent to the backend")

            alert(e.message)
            
            console.log(e);
            
        }
        
    }


 


    return (<div className="">
        {/* upload image element */}
        <form onSubmit={handleSubmit}>

           
            <UploadImage />
            {stegaImage ? <InsertSecretMessage /> : <></>}
            {isLoading ? <Loading/> : <></>}
            {resultOfStegaImageFromServer ? <ResultImage /> : <></>} 
            <Quotes/>
        </form>
    </div>)
}