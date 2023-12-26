import Carousel from 'react-bootstrap/Carousel';
import '../assets/css/Carrusel.css'
import CajasPto1 from '../assets/statics/Presentaciones/cajaspto (1).png';
import CajasPto2 from '../assets/statics/Presentaciones/cajaspto (2).png';
import CajasPto3 from '../assets/statics/Presentaciones/cajaspto (3).png';
import CajasPto4 from '../assets/statics/Presentaciones/cajaspto (4).png';
import Bolsa1 from '../assets/statics/Presentaciones/bolsitas (1).png'
import Bolsa2 from '../assets/statics/Presentaciones/bolsitas (2).png'
import Bolsa3 from '../assets/statics/Presentaciones/bolsitas (3).png'
import Clamshell  from '../assets/statics/Presentaciones/clamshell (1).jpeg'
import Clamshell1  from '../assets/statics/Presentaciones/clamshell (2).jpeg'
import Clamshell2  from '../assets/statics/Presentaciones/clamshell (1).jpg'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



function UncontrolledExample() {
    return (
        <div className='presentaciones'>
            <Carousel className='carrusel' controls>
        <Carousel.Item interval={2000} sid='tam'>
        <img className="d-block  w-100" src={CajasPto1} alt="Presentaciones"/>
            <h3 className='epigrafe'>Cajas de 10kg y 13,6kg. Marcas: Frutandina, Pasandina, Suriaexport, Rio Castaño.</h3>
        </Carousel.Item>
        <Carousel.Item interval={2000} sid='tam'>
        <img className=" d-block  w-100" src={CajasPto2} alt="Presentaciones" />
            <h3 className='epigrafe'>Cajas de 10kg y 13,6kg. Marcas: Frutandina, Pasandina, Suriaexport, Rio Castaño.</h3>
        </Carousel.Item>
        <Carousel.Item interval={2000} sid='tam'>
        <img className=" d-block  w-100" src={CajasPto3} alt="Presentaciones" />
            <h3 className='epigrafe'>Cajas de 10kg y 13,6kg. Marcas: Frutandina, Pasandina, Suriaexport, Rio Castaño.</h3>
        </Carousel.Item>
        <Carousel.Item interval={2000} sid='tam'>
        <img className=" d-block  w-100" src={CajasPto4} alt="Presentaciones" />
            <h3 className='epigrafe'>Cajas de 10kg y 13,6kg. Marcas: Frutandina, Pasandina, Suriaexport, Rio Castaño.</h3>
        </Carousel.Item>
    </Carousel>
    <Carousel className='carrusel'>
        <Carousel.Item interval={2000} sid='tam'>
        <img className=" d-block  w-100" src={Bolsa1} alt="Presentaciones"/>
            <h3 className='epigrafe'>Sachet de 50g, 100g, 200g y 500g. Marca Pasandina.</h3>
        </Carousel.Item>
        <Carousel.Item interval={2000} sid='tam'>
        <img className=" d-block  w-100" src={Bolsa2} alt="Presentaciones" />
            <h3 className='epigrafe'>Sachet de 50g, 100g, 200g y 500g. Marca Pasandina.</h3>
        </Carousel.Item>
        <Carousel.Item interval={2000} sid='tam'>
        <img className=" d-block  w-100" src={Bolsa3} alt="Presentaciones" />
            <h3 className='epigrafe'>Sachet de 50g, 100g, 200g y 500g. Marca Pasandina.</h3>
        </Carousel.Item>
    </Carousel>
    <Carousel className='carrusel'>
        <Carousel.Item interval={2000} sid='tam'>
        <img className=" d-block  w-100" src={Clamshell} alt="Presentaciones"/>
            <h3 className='epigrafe'>Clamshell de 150g y 250g. Marca Pasandina. </h3>
        </Carousel.Item>
        <Carousel.Item interval={2000} sid='tam'>
        <img className=" d-block  w-100" src={Clamshell1} alt="Presentaciones" />
            <h3 className='epigrafe'>Clamshell de 150g y 250g. Marca Pasandina.</h3>
        </Carousel.Item>
        <Carousel.Item interval={2000} sid='tam'>
        <img className=" d-block  w-100" src={Clamshell2} alt="Presentaciones" />
            <h3 className='epigrafe'>Clamshell de 150g y 250g. Marca Pasandina.</h3>
        </Carousel.Item>
    </Carousel>
        </div>
    
    
    );
}

export default UncontrolledExample;