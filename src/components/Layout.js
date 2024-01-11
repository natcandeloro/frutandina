import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import Whatsapp from "./Whatsapp";
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

export default function Layout(props){
    const{ children } = props;
    return(
        <I18nextProvider i18n={i18n}>
        <div>
            <Header></Header>
            { children }
            <Whatsapp></Whatsapp>
            <Footer></Footer>
        </div>
        </I18nextProvider>
    )
}