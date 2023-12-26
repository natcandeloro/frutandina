import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import Whatsapp from "./Whatsapp";

export default function Layout(props){
    const{ children } = props;
    return(
        <div>
            <Header></Header>
            { children }
            <Whatsapp></Whatsapp>
            <Footer></Footer>
        </div>
    )
}