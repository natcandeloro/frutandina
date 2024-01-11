import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Nosotros from '../Nosotros';
import Productos from '../Productos';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

export default function App(){
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
          i18n.changeLanguage(savedLanguage);
        }
      }, []);
    return (
        <HashRouter>
         <I18nextProvider i18n={i18n}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Nosotros/>} ></Route>
                    <Route path="/productos" element={<Productos/>}></Route>
                    <Route path="/contaco" element={<Footer/>}></Route>
                </Routes>
            </Layout></I18nextProvider>
        </HashRouter>
    )
}