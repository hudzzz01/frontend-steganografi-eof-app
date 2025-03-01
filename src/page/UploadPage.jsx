import { useContext, useState } from "react";
import InsertSecretMessage from "../componen/InsertSecretMessage";
import UploadImage from "../componen/UploadImage";
import { AppContext } from "../componen/context/AppProvider";
import ResultImage from "../componen/ResultImage";
import Loading from "../componen/Loading";

export default function UploadPage() {

    const { stegaImage,secretMessage, urlImageEmbed, setResultOfStegaImageFromServer, resultOfStegaImageFromServer  } = useContext(AppContext)
    
    const [isLoading, setIsloading] = useState(false);
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Pesan Rahasia:", secretMessage, stegaImage);

        setIsloading(true)
        setTimeout(()=>{
            setIsloading(false)
            setResultOfStegaImageFromServer(urlImageEmbed)
        },2000)
    }


    return (<div className="">
        {/* upload image element */}
        <form onSubmit={handleSubmit}>

            <UploadImage />
            {stegaImage ? <InsertSecretMessage /> : <></>}
            {isLoading ? <Loading/> : <></>}
            {resultOfStegaImageFromServer ? <ResultImage /> : <></>} 
        </form>
    </div>)
}