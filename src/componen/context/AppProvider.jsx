import React, { createContext, useState } from 'react';
import imageThumnail from '../../assets/maskot_login.png';

const AppContext = createContext()

const AppProvider = ({children}) => {


    const [theme,setTheme] = useState("light");
    const [isLoading, setIsLoading] = useState(false)
    const [stegaImage,setStegaImage] = useState(null)
    const [secretMessage, setSecretMessage] = useState("")
    const [isAllert, setIsAllert] = useState(false)
    const [allertMessage, setAllertMessage] = useState("")
    const [urlImageEmbed,setUrlImageEmbed] = useState(imageThumnail)
    const [resultOfStegaImageFromServer,setResultOfStegaImageFromServer] = useState(null)
    
    //state for extract image
    const [extractedSecredMEssage, setExtractedSecretMessage] = useState(null);
    const [imageWithSecretMessage, setImageWithSecretMessage] = useState(null);
    const [urlImageEmbedExtract,setUrlImageEmbedExtract] = useState(imageThumnail)
    const [key, setKey] = useState("");

    const extractMessageFunction = async (stegaImage,key)=>{


        const formData = new FormData()

        formData.append("actual-image", stegaImage)
        formData.append("message", secretMessage)

        // send to backend
      

        try{
            const res = await axios.post(  
                "http://localhost:8888/api/v1/steganografy/steganografi/insertTextToImage",
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
            
            console.log(e);
            
        }
    }


    const contextValue = {
            theme : theme,
            isLoading : isLoading,
            stegaImage : stegaImage,
            secretMessage : secretMessage,
            isAllert : isAllert,
            allertMessage : allertMessage,
            urlImageEmbed : urlImageEmbed,
            resultOfStegaImageFromServer :  resultOfStegaImageFromServer,

            //state for extract image
            extractedSecredMEssage : extractedSecredMEssage,
            imageWithSecretMessage : imageWithSecretMessage,
            urlImageEmbedExtract : urlImageEmbedExtract,
            key: key,
            

            setTheme : setTheme,
            setIsLoading : setIsLoading,
            setStegaImage : setStegaImage,
            setSecretMessage : setSecretMessage,
            setIsAllert : setIsAllert,
            setAllertMessage : setAllertMessage,
            setUrlImageEmbed : setUrlImageEmbed,
            setResultOfStegaImageFromServer : setResultOfStegaImageFromServer,

            //setstate for extract image
            setExtractedSecretMessage: setExtractedSecretMessage,
            setImageWithSecretMessage : setImageWithSecretMessage,
            setUrlImageEmbedExtract : setUrlImageEmbedExtract,
            setKey : setKey,

            //function
            extractMessageFunction : extractMessageFunction
            
        };      

        

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );

   
}

export {AppProvider, AppContext}
