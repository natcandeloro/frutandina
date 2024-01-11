import React from "react";
import LogoWhatsapp from "../assets/statics/Footer/whatsapp.png"
import '../assets/css/Whatsapp.css'

export default function Whatsapp(){
    
    return(
        <div>
            <a href="https://wa.me/2645099951" class="" target="_blank"><img src={LogoWhatsapp} className="my-float float"/></a>
        </div>
    )
}