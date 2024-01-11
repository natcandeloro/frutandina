import React from "react";
import '../assets/css/Nosotros.css'
import Viñedos from "../assets/statics/Nosotros/Rectangle 49.png"
import Somos from "../assets/statics/Nosotros/fotogente.png"
import Proceso from "../assets/statics/Nosotros/Rectangle 51.png"
import Caja from "../assets/statics/Nosotros/Rectangle 521.png"
import prueba1 from '../assets/statics/prueba1.jpeg';
import prueba2 from '../assets/statics/prueba2.jpeg';
import prueba3 from '../assets/statics/prueba3.jpeg';
import prueba4 from '../assets/statics/prueba4.jpeg';
import equipo from '../assets/statics/Nosotros/equipo.png'
import responsabilidad from '../assets/statics/Nosotros/responsabilidad.png'
import etica from '../assets/statics/Nosotros/etica.png'
import compromiso from '../assets/statics/Nosotros/compromiso.png'
import creatividad from '../assets/statics/Nosotros/creatividad.png'
import ReactPlayer from "react-player";
import video from '../assets/statics/Videos/video-header.mp4'
import { useTranslation } from "react-i18next";
import vision from '../assets/statics/hito.png'
import mision from '../assets/statics/mision-cumplida.png'
import { FaStar } from "react-icons/fa";

export default function Home(){
    const [t, i18next] = useTranslation("nosotros");
    return (
        <div>
            <section id="home">
            <div className="vid">
                        <ReactPlayer url={video}
                        loop
                        playing={true}
                        muted
                        width='100%'
                        height='100%'/>   
                    </div>
            </section>
            <section className="somos" id="somos">
                
                    <div class="row row-somos recuadro">
                        <h1 className="h1-blanco">{t("sesions.us")}</h1>
                        <br/><div class="row-nosotros">
                            <h3>{t("sesions.weAre")}
                            </h3><img src={Somos} atl="Foto del equipo de Frutandina" className="foto-equipo"/>
                        </div>
                        <div class="col-6">
                        </div>
                    </div>
                    <div class="row row-mision ">
                        <div class="col-6 recuadro">
                            <h4 className="h4-vision">{t("Mision.title")}</h4>          
                            <img src={mision} alt="Icono de Visión" className="iconos"></img>
                            <p className="p-vision">{t("Mision.body")} </p>
                        </div>
                        <div class="col-6 recuadro">
                        <h4 className="h4-vision">{t("Vision.title")}</h4>
                        <img src={vision} alt="Icono de Visión" className="iconos"></img>
                            <p className="p-vision">{t("Vision.body")} </p>
                        </div>
                    </div>
                    <br/>
                    
            </section>
            <section id="valores" className="display">
                <h3 className="h3valores">{t("Valores.title")}</h3>
                <div className="row row-valores">
                        <div className="valores-1"><p className="p-valores-4">{t("Valores.1")}</p></div>
                        <div className="valores-2"><p className="p-valores-4">{t("Valores.2")}</p></div>
                        <div className="valores-3"><p className="p-valores-4">{t("Valores.3")} <br/>{t("Valores.3-1")}</p></div>
                        <div className="valores-4"><p className="p-valores-4">{t("Valores.4")}<br/> {t("Valores.4-1")}</p></div>        
                    <div className="valores-5"><p className="p-valores-4">{t("Valores.5")}</p></div>
                </div>
            </section>
            <section id="valores" className="none-value">
                <h3 className="h3valores">{t("Valores.title")}</h3>
                <div className="row row-valores">
                    <div className="value-col">
                        <div className="valores-1"><p className="p-valores-4">{t("Valores.1")}</p></div>
                        <div className="valores-2"><p className="p-valores-4">{t("Valores.2")}</p></div>
                    </div>
                    <div className="value-col">
                        <div className="valores-3"><p className="p-valores-4">{t("Valores.3")} <br/>{t("Valores.3-1")}</p></div>
                        <div className="valores-4"><p className="p-valores-4">{t("Valores.4")}<br/> {t("Valores.4-1")}</p></div>
                    </div>                    
                    <div className="value-col">
                    <div className="valores-5"><p className="p-valores-4">{t("Valores.5")}</p></div>
                    </div>
                </div>
            </section>
            <section className="contenedor">
                <img src={Viñedos} alt="Viñedos" className="viñedos" /> 
                <div className="centrado row ">
                    <div className="col-6-slogan"><h4 className="slogan">{t("slogan.1")}<span className="color-slogan ">{t("slogan.2")}</span> <br/>{t("slogan.3")}<br/><span >{t("slogan.4")}</span></h4></div>
                </div>
            </section>
            <section id="certificaciones" className="sCertificaciones">
                <div className="row certificaciones">
                    <div className="col">
                        <h3 className="certif">{t("certificaciones.title")}</h3>
                        <div className="row-certifi">
                            <div className="col-7">
                                <p className="p-acreditaciones">{t("certificaciones.body")}</p>
                            <img src={Caja} alt="Uvas" className="foto-uvas"/>
                            </div>
                            <div className="col-5"> 
                            <div className="card-reconocimiento">
                            <div className="p-acreditaciones" >
                <ul class="list-group">
                    <li class="list-group-item"><FaStar className="star"/> {t("certificaciones.sello1")} </li>
                    <hr className="linea-reconocimiento"/>
                    <li class="list-group-item"><FaStar className="star"/> {t("certificaciones.sello2")}</li>
                    <hr className="linea-reconocimiento"/>
                    <li class="list-group-item"><FaStar className="star"/> {t("certificaciones.sello3")}</li>
                    <hr className="linea-reconocimiento"/>
                    <li class="list-group-item"><FaStar className="star"/> Kosher</li>
                    <hr className="linea-reconocimiento"/>
                </ul>
                </div>
                        </div>
                    </div>
                        </div>
                    </div>
                    <div className="col-reconocimeinto ">
                        <img src={ Proceso} className="proceso"/>
                    </div>
                </div>
                <div class="slider_clientes">
                    <div>
                    <img src={prueba1}/>
                    <img src={prueba2}/>
                    <img src={prueba3}/>
                    <img src={prueba4}/>
                    </div>
                    <div>
                    <img src={prueba1}/>
                    <img src={prueba2}/>
                    <img src={prueba3}/>
                    <img src={prueba4}/>
                    </div>
                    <div>
                    <img src={prueba1}/>
                    <img src={prueba2}/>
                    <img src={prueba3}/>
                    <img src={prueba4}/>
                    </div>
  </div>
<div ><p className="div-acreditaciones">{t("certificaciones.reconocimientos")}</p></div>
            </section>
        </div>
    );
}