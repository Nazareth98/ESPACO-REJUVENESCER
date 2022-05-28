import React from 'react'
import logo from '../assets/marca.png'
import whatsapp from "../assets/whatsapp.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    const mobileScreen = () => {
        if (window.innerWidth < 1500)
            return true
        else 
            return false
    }

    React.useEffect(() => {
        Aos.init({duration: 1500});
      }, [])


  return (
    <footer id='about' className='w-full md:h-[20rem] py-10'>
        <div data-aos='fade' data-aos-once='true' className='xl:w-4/6 w-full h-full m-auto flex flex-col md:flex-row'>
            <div data-aos='fade-up' data-aos-once='true'  className='md:w-1/4 p-2 text-sm text-slate-500'>
                <div>
                    <a href="/"><img src={logo} alt="" className='w-4/6 mr-auto'/></a>
                </div>
                <div className='py-2'>
                    <p>R. Rui Barbosa, 2126 - Vila Bom Jesus</p>
                </div>
                <div className='py-2'>
                    <p>CNPJ: 38.300.838/0001-73</p>
                </div>
                <div className='flex py-2'>
                    <div><a href="https://api.whatsapp.com/send?phone=5545984070668&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas!"><img src={whatsapp} alt="" srcSet="" /></a></div>
                    <div  className='ml-1'><a href="https://www.instagram.com/raissa_araldi.odontologia/"><img src={instagram} alt="" srcSet="" /></a></div>
                    <div  className='ml-1'><a href="https://www.facebook.com/draraissaraldi/"><img src={facebook} alt="" srcSet="" /></a></div>
                </div>
            </div>

            <div data-aos='fade-up' data-aos-once='true' data-aos-duration='1700' className='md:w-1/4 p-2 mt-2 md:mt-0'>
                <h3 className='pb-2 text-lg text-[#AB8966] font-bold '>Menu</h3>
                <ul>
                    <li ><a className='py-1 text-sm text-slate-500 hover:text-[#E6C69D] transition-all duration-200' href="#home">Inicio</a></li>
                    <li><a className='py-1 text-sm text-slate-500 hover:text-[#E6C69D] transition-all duration-200' href="#products">Procedimentos</a></li>
                    <li><a className='py-1 text-sm text-slate-500 hover:text-[#E6C69D] transition-all duration-200' href="#find-us">Fale Conosco</a></li>
                </ul>
            </div>

            <div data-aos='fade-up' data-aos-once='true' data-aos-duration='1900' className='md:w-1/4 p-2 mt-2 md:mt-0'>
            <h3 className='pb-2 text-lg text-[#AB8966] font-bold '>Procedimentos</h3>
                <ul>
                    <li className='w-full'><a className='py-1 text-sm text-slate-500 hover:text-[#E6C69D] transition-all duration-200' href="#products">Preenchimento Labial</a></li>
                    <li><a className='py-1 text-sm text-slate-500 hover:text-[#E6C69D] transition-all duration-200' href="#products">Subcisão Facial</a></li>
                    <li><a className='py-1 text-sm text-slate-500 hover:text-[#E6C69D] transition-all duration-200' href="#products">Botox</a></li>
                </ul>
            </div>

            <div data-aos='fade-up' data-aos-once='true' data-aos-duration='2100' className='md:w-1/4 max-h-72 mt-2 md:mt-0'>
                <div className='w-full h-full'>
                <iframe title= "teste" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.9830191525202!2d-54.574124384349766!3d-25.538942543460518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f690539d17b1d5%3A0x786e4c74b6acb49!2sR.%20Rui%20Barbosa%2C%202126%20-%20Vila%20Bom%20Jesus%2C%20Foz%20do%20Igua%C3%A7u%20-%20PR%2C%2085852-120!5e0!3m2!1spt-BR!2sbr!4v1653613039052!5m2!1spt-BR!2sbr" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer