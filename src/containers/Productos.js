import React, { useState} from "react";
import '../assets/css/Productos.css';
import  pasas  from '../assets/statics/Variedades/pasas.png';
import  pasas1  from '../assets/statics/Variedades/pasas1.png';
import  pasas2  from '../assets/statics/Variedades/pasas2.png';
import  pasas3  from '../assets/statics/Variedades/rubia.png';
import  pasas4  from '../assets/statics/Variedades/pasas4.png';
import fabrica from '../assets/statics/planta-frutandina2 .jpg'
import  Carrusel  from '../components/carrusel'
import ReactPlayer from "react-player";
import VideosProduccion from '../assets/statics/Videos/produccion-frutandina.mp4';
import { useTranslation } from "react-i18next";

export default function Home(){
  const [t] = useTranslation("nosotros");
  const ProductoConAgrandar = ({ imagen, descripcion }) => {
    const [imagenAgrandada, setImagenAgrandada] = useState(false);
  
    const toggleAgrandar = () => {
      setImagenAgrandada(!imagenAgrandada);
    };
    return (
      <div className="contenedorPtos" onClick={toggleAgrandar}>
        <div className="fondo"></div>
        <div className="caja">
          <div className="imagen-circular">
            <img src={imagen} alt="Imagen Circular" />
          </div>
        </div>
        <div className="texto">
          <p className="p-caja">{descripcion}</p>
        </div>
  
        {imagenAgrandada && (
          <div
            className="imagen-agrandada-overlay"
            onClick={toggleAgrandar}
          >
            <img src={imagen} alt="Imagen Agrandada" />
          </div>
        )}
      </div>
    );
  };
    return (
        <div>
          <img src={fabrica } alt="Caja en proceso de embalaja" className="vid"/>
          <section id="variedades">
      <h1>{t("Productos.Variedades")}</h1>
      <div className="cajas1">
        <ProductoConAgrandar imagen={pasas} descripcion={t("variedades.1")} />
        <ProductoConAgrandar imagen={pasas1} descripcion={t("variedades.2")} />
        <ProductoConAgrandar imagen={pasas2} descripcion={t("variedades.3")} />
      </div>
      <div className="cajas1">
        <ProductoConAgrandar imagen={pasas3} descripcion={t("variedades.4")} />
        <ProductoConAgrandar imagen={pasas4} descripcion={t("variedades.5")} />
      </div>
    </section>
            <section className="productos">
            <h1>{t("Productos.Presentaciones")}</h1>
            <Carrusel></Carrusel>
            </section>
            <section id="produccion">
            <h1 className="margin">{t("Productos.Produccion")}</h1>
            <div className="row row-produccion">
            <div className="col-6 total-1">
                        <ReactPlayer url={VideosProduccion}
                        loop
                        playing={true}
                        muted
                        className="video-produccion"
                        />   
            </div>
            <div className="col-6 total">
              <p className="p-produccion">{t("Productos.Body")}</p>
            </div>
            </div>
            </section>
        </div>
    );
}