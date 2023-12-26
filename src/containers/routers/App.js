import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from '../Nosotros';
import Productos from '../Productos';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout'

export default function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Nosotros/>} ></Route>
                    <Route path="/productos" element={<Productos/>}></Route>
                    <Route path="/contaco" element={<Footer/>}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}