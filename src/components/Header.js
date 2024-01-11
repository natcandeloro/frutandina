import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import LogoBlanco from "../assets/statics/logo.png";
import eeuu from "../assets/statics/eeuu.png";
import arg from "../assets/statics/argentina.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from "react-i18next";




export default function Header(){
  const [t, i18next] = useTranslation("nosotros");
  const handleChangeLanguage = (language) => {
    i18next.changeLanguage(language);
    localStorage.setItem('language', language);
  };
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const handleClose = () => setExpanded(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleClose();
  };
  const SomeComponent = () => {
    const { i18n } = useTranslation();
    console.log('Current language:', i18n.language);}
  
    return(
        <header>
            <Navbar expand="lg" expanded={expanded} className="bg-body-tertiary row row-nav">
        <div className="col-4 div-logo">
          <Navbar.Brand as={Link} to="/#somos"><img src={LogoBlanco} alt="Logo Frutandina" className="logo" onClick={scrollToTop}/></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav light" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="col-8 nav-res">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={scrollToTop}>{t("header.somos")} </Nav.Link>
            <Nav.Link as={Link} to="/productos" onClick={handleClose}>{t("header.productos")}</Nav.Link>
            <Nav.Link href="#contacto" onClick={handleClose}>{t("header.contacto")}</Nav.Link>
            {i18next.language !== 'es' && (
        <button onClick={() => handleChangeLanguage('es')}>
          ES<img src={arg} alt="Bandera de Argentina" className="banderas" />
        </button>
      )}

      {i18next.language !== 'en' && (
        <button onClick={() => handleChangeLanguage('en')} >
          EN<img src={eeuu} alt="Bandera de Estados Unidos" className="banderas" />
        </button>
      )}
          </Nav>
          </div>
          
        </Navbar.Collapse>
    </Navbar>
        </header>

)

}
