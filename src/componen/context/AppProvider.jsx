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
            setUrlImageEmbedExtract : setUrlImageEmbedExtract
            
        };      

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

export {AppProvider, AppContext}
