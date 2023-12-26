import React from "react";
import '../assets/css/Nosotros.css'
import Uvas from "../assets/statics/Nosotros/Rectangle 50 1.png"
import Viñedos from "../assets/statics/Nosotros/Rectangle 49.png"
import Somos from "../assets/statics/Nosotros/fotogente.png"
import Proceso from "../assets/statics/Nosotros/Rectangle 51.png"
import Caja from "../assets/statics/Nosotros/Rectangle 521.png"
import prueba1 from '../assets/statics/prueba1.jpeg';
import prueba2 from '../assets/statics/prueba2.jpeg';
import prueba3 from '../assets/statics/prueba3.jpeg';
import prueba4 from '../assets/statics/prueba4.jpeg';
import star from '../assets/statics/Nosotros/Star 4.png';
import equipo from '../assets/statics/Nosotros/equipo.png'
import responsabilidad from '../assets/statics/Nosotros/responsabilidad.png'
import etica from '../assets/statics/Nosotros/etica.png'
import compromiso from '../assets/statics/Nosotros/compromiso.png'
import creatividad from '../assets/statics/Nosotros/creatividad.png'
import ReactPlayer from "react-player";
import video from '../assets/statics/Videos/video-header.mp4'
import { useTranslation } from "react-i18next";

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
                <h1>{t("sesions.us")}</h1>
                    <div class="row row-somos">
                        <div class="col-6">
                            <h3>{t("sesions.weAre")}
                            </h3>
                        </div>
                        <div class="col-6">
                            <img src={Somos} atl="Foto del equipo de Frutandina" className="foto-equipo"/>
                        </div>
                    </div>
                    <div class="row row-mision">
                        <div class="col-6">
                            <h4 className="h4-vision">Nuestra Misión</h4>
                            <p className="p-vision">Somos una empresa responsable, transparente y sostenible, de fuertes valores, que busca satisfacer las necesidades de nuestros clientes trabajando eficientemente, con amplia presencia en el mercado tanto nacional como internacional, buscando el bien común de la sociedad y el bien particular de quienes colaboramos con ella. </p>
                        </div>
                        <div class="col-6">
                        <h4 className="h4-vision">Nuestra Visión</h4>
                            <p className="p-vision">Producir y comercializar productos alimenticios de excelente calidad para garantizar la satisfacción de nuestros clientes. </p>
                            
                        </div>
                    </div>
            </section>
            <section id="valores">
                <h3 className="h3valores">Nuestros valores</h3>
                <div className="row row-valores">
                    <div className="col valores"><img src={compromiso} className="img-valores"/><p className="p-valores">Compromiso con la calidad</p></div>
                    <div className="col valores"><img src={etica} className="img-valores"/><p className="p-valores">Ética empresarial</p></div>
                    <div className="col valores"><img src={responsabilidad} className="img-valores"/><p className="p-valores">Responsabilidad <br/>Social</p></div>
                    <div className="col valores"><img src={creatividad} className="img-valores"/><p className="p-valores">Creatividad e<br/> innovación</p></div>
                    <div className="col valores"><img src={equipo} className="img-valores"/><p className="p-valores">Trabajo en equipo</p></div>
                </div>
            </section>
            <section className="contenedor">
                <img src={Viñedos} alt="Viñedos" className="viñedos" /> 
                <div className="centrado row ">
                    <div className="col-6-slogan"><h4 className="slogan">{t("slogan.1")}<span className="color-slogan">{t("slogan.2")}</span> <br/>{t("slogan.3")} <br/><span className="tamaño">{t("slogan.4")}</span> </h4></div>
                    <div className="col-4-uvas"><img src={Uvas} alt="Uvas"/></div>
                </div>
            </section>
            <section id="certificaciones">
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
                            <div class="p-acreditaciones" >
                <ul class="list-group">
                    <li class="list-group-item"><img src={star} alt="Estrella"/> {t("certificaciones.sello1")} </li>
                    <hr className="linea-reconocimiento"/>
                    <li class="list-group-item"><img src={star} alt="Estrella"/> {t("certificaciones.sello2")}</li>
                    <hr className="linea-reconocimiento"/>
                    <li class="list-group-item"><img src={star} alt="Estrella"/> {t("certificaciones.sello3")}</li>
                    <hr className="linea-reconocimiento"/>
                    <li class="list-group-item"><img src={star} alt="Estrella"/> Kosher</li>
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