import React from "react";
import Deploy  from "../assets/statics/Footer/LOGOTIPO BLANCO.png";
import Instagram from "../assets/statics/Footer/instagram.png"
import Facebook from "../assets/statics/Footer/facebook.png"
import logoBlanco from "../assets/statics/logo.png"
import '../assets/css/Footer.css'
import Form from "./form";
import { useTranslation } from "react-i18next";
import { MdEmail, MdLocalPhone, MdLocationPin  } from "react-icons/md";


export default function Footer(){
    const [t] = useTranslation("nosotros");
    return (
        <footer id="contacto">
                <div className="  row row-cols-4">
                    <div className="row dos">
                <div class="col col-footer">
                <img src={logoBlanco} alt="Logo de Frutandina" className="frutandinalogoBlanco"/>
                    <div className="cajafooter">
                    <h5>{t("footer.contacto")}</h5>
                    <hr className="linea"/>
                    <p><MdEmail className="icon" /> info@frutandina.com</p>
                    <p><MdLocalPhone className="icon"/> 264-4911217 - 264-4911218</p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                <div className="cajafooter">
                    <h5>{t("footer.seguinos")}</h5>
                    <hr className="linea"/>
                    <div>
                        <a href="https://www.facebook.com/frutandina.sanjuan" target="black" className="a"><img src={Facebook}  className="face" alt='Logo de Facebook'/></a>
                        <a href="https://www.instagram.com/frutandina_sj/" target="black" className="a"><img src={Instagram}  className="ig" alt='Logo de Instagram'/></a>

                    </div>
                </div>
                </div>
                <div class="col ubi ">
                    <div className="cajafooter ubi">
                        <h5>{t("footer.ubicacion")}</h5>
                    <hr className="linea"/>
                    <p><MdLocationPin className="icon" /> San Juan - Arg</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0237437028118!2d-68.49540422478768!3d-31.41347189610979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96816878aec36951%3A0x9e263e59f4062856!2sFrutandina%20S.A.!5e0!3m2!1ses-419!2sar!4v1702990368973!5m2!1ses-419!2sar" width="250" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                    </div>
                </div>
                    </div>
                <div class="col-6 col-6-footer form">
                <Form></Form>
                </div>
                </div>
                <div class="text-center p-3 ">
                    <h6 className="footer">© 2024 Copyright Frutandina</h6>
                <h6 className="footer">Diseñado y desarrolado por <a href="https://wa.me/2615434358" target="black"><img src={Deploy} className="deploy" alt='Logo de Deploy'/></a></h6>
                </div>
    </footer>
    )
}