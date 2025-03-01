import { Outlet } from "react-router";
import Navbar from "../../componen/Navbar,";
import Footer from "../../componen/Footer";
import Allert from "./Allert";
import { AppContext } from "../../componen/context/AppProvider";
import { useContext } from "react";

export default function Layout() {


    const { isAllert } = useContext(AppContext)

    let allertElement;
    if(isAllert){
        allertElement = <Allert/>
    }else{
        allertElement = <></>
    }

    return (
        <div>
            <Navbar/>
            {allertElement}
            <div className="main"> <Outlet /> </div>
            <Footer/>
        </div>
    )
}