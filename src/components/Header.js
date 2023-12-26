import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import LogoBlanco from "../assets/statics/frutandinalogoBLANCO 1.png"
import NavDropdown from 'react-bootstrap/NavDropdown';
import eeuu from "../assets/statics/eeuu.png";
import arg from "../assets/statics/argentina.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from "react-i18next";

export default function Header(){
  const [t, i18next] = useTranslation("nosotros");
  const handleChangeLanguage = (language) => {
    i18next.changeLanguage(language);
  };
    return(
        <header>
            <Navbar expand="lg" className="bg-body-tertiary row row-nav">
        <div className="col-4 div-logo">
          <Navbar.Brand to="/" href="/#home"><img src={LogoBlanco} alt="Logo Frutandina" className="logoNegro" /></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="col-8">
            <Nav className="me-auto">
            <NavDropdown title={t("header.somos")} id="basic-nav-dropdown">
              <NavDropdown.Item to="/"  href="/#somos">
                ¿Quienes somos? 
              </NavDropdown.Item>
              <NavDropdown.Item to="/"  href="/#valores">Valores</NavDropdown.Item>
              <NavDropdown.Item to="/" href="/#certificaciones">
                Certificaciones
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("header.productos")} id="basic-nav-dropdown">
              <NavDropdown.Item to="/productos"  href="/productos#variedades">
                Variedades
              </NavDropdown.Item>
              <NavDropdown.Item to="/productos"  href="/productos#productos">Productos</NavDropdown.Item>
              <NavDropdown.Item to="/productos" href="/productos#produccion">
                Producción
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">{t("header.contacto")}</Nav.Link>
            {i18next.language !== 'es' && (
        <button onClick={() => handleChangeLanguage('es')}>
          ES <img src={arg} alt="Bandera de Argentina" className="banderas" />
        </button>
      )}

      {i18next.language !== 'en' && (
        <button onClick={() => handleChangeLanguage('en')}>
          EN <img src={eeuu} alt="Bandera de Estados Unidos" className="banderas" />
        </button>
      )}
          </Nav>
          </div>
          
        </Navbar.Collapse>
    </Navbar>
        </header>

)

}
