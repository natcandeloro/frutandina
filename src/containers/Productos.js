import React from "react";
import '../assets/css/Productos.css';
import  pasas  from '../assets/statics/Variedades/pasas.png';
import  pasas1  from '../assets/statics/Variedades/pasas1.png';
import  pasas2  from '../assets/statics/Variedades/pasas2.png';
import  pasas3  from '../assets/statics/Variedades/pasas3.png';
import  pasas4  from '../assets/statics/Variedades/pasas4.png';
import fabrica from '../assets/statics/planta-frutandina2 .jpg'
import  Carrusel  from '../components/carrusel'
import ReactPlayer from "react-player";
import VideosProduccion from '../assets/statics/Videos/produccion-frutandina.mp4'

export default function Home(){
    return (
        <div>
          <img src={fabrica } alt="Caja en proceso de embalaja" className="vid"/>
            <section id="variedades">
                <h1>Nuestras variedades</h1>
                <div className="cajas1">
                <div className="contenedorPtos">
      <div className="fondo"></div>
      <div className="caja">
        <div className="imagen-circular">
          <img src={pasas} alt="Imagen Circular" />
        </div>
      </div>
      <div className="texto">
        <p className="p-caja">Pasas de uva sin semillas arizul</p>
      </div>
    </div>
    <div className="contenedorPtos">
      <div className="fondo"></div>
      <div className="caja">
        <div className="imagen-circular">
          <img src={pasas1} alt="Imagen Circular" />
        </div>
      </div>
      <div className="texto">
        <p className="p-caja">Pasas de uva sin semillas arizul</p>
      </div>
    </div>
    <div className="contenedorPtos">
      <div className="fondo"></div>
      <div className="caja">
        <div className="imagen-circular">
          <img src={pasas2} alt="Imagen Circular" />
        </div>
      </div>
      <div className="texto">
        <p className="p-caja">Pasas de uva sin semillas arizul</p>
      </div>
    </div></div>
    <div className="cajas1">
                <div className="contenedorPtos">
      <div className="fondo"></div>
      <div className="caja">
        <div className="imagen-circular">
          <img src={pasas3} alt="Imagen Circular" />
        </div>
      </div>
      <div className="texto">
        <p className="p-caja"> Sultanina Rubia</p>
      </div>
    </div>
    <div className="contenedorPtos">
      <div className="fondo"></div>
      <div className="caja">
        <div className="imagen-circular">
          <img src={pasas4} alt="Imagen Circular" />
        </div>
      </div>
      <div className="texto">
        <p className="p-caja">Pasas de uva sin semillas arizul</p>
      </div>
    </div>
                </div>
            </section>
            <section id="productos">
            <h1>Nuestras presentaciones</h1>
            <Carrusel></Carrusel>
            </section>
            <section id="produccion">
            <h1 className="margin">Producción</h1>
            <div className="row row-produccion">
            <div className="col-6">
                        <ReactPlayer url={VideosProduccion}
                        loop
                        playing={true}
                        muted
                        />   
            </div>
            <div className="col-4">
              <p className="p-vision"> La empresa se encuentra ubicada en la localidad de Albardón en la provincia de San Juan.
 en la República Argentina,
 Las características del lugar,son un clima seco con temperaturas de 45º C en verano y menos 6º C en invierno, las propiedades de su suelo, sumado al aporte del riego con agua del deshielo de la Cordillera de los Andes, articulan las condiciones óptimas para el cultivo y secado de las uvas.
</p>
            </div>
            </div>
            </section>
        </div>
    );
}