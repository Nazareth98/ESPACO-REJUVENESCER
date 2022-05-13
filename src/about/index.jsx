import React from 'react'
import logo from '../assets/marca.png'
import whatsapp from "../assets/whatsapp.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

const About = () => {
  return (
    <div id='about' className='w-full md:h-[20rem] py-10'>
        <div className='xl:w-4/6 w-full h-full m-auto flex flex-col md:flex-row'>
            <div className='md:w-1/4 p-2 text-sm text-slate-500'>
                <div>
                    <a href="/"><img src={logo} alt="" className='w-4/6 m-auto'/></a>
                </div>
                <div className='py-2'>
                    <p>Av. República Argentina, 3339 - Campos do Iguacu, Foz do Iguaçu - PR, 85857-118</p>
                </div>
                <div className='py-2'>
                    <p>CNPJ: 38.300.838/0001-73</p>
                </div>
                <div className='flex py-2'>
                    <div><a href="/"><img src={whatsapp} alt="" srcset="" /></a></div>
                    <div  className='ml-1'><a href="/"><img src={instagram} alt="" srcset="" /></a></div>
                    <div  className='ml-1'><a href="/"><img src={facebook} alt="" srcset="" /></a></div>
                </div>
            </div>

            <div className='md:w-1/4 p-2 mt-2 md:mt-0'>
                <h3 className='pb-2 text-lg text-[#AB8966] font-bold '>Menu</h3>
                <ul>
                    <li ><a className='py-1 text-sm text-slate-500 hover:text-[#E6C69D] transition-all duration-200' href="#home">Inicio</a></li>
                    <li><a className='py-1 text-sm text-slate-500 hover:text-[#E6C69D] transition-all duration-200' href="#products">Procedimentos</a></li>
                    <li><a className='py-1 text-sm text-slate-500 hover:text-[#E6C69D] transition-all duration-200' href="#find-us">Fale Conosco</a></li>
                </ul>
            </div>

            <div className='md:w-1/4 p-2 mt-2 md:mt-0'>
            <h3 className='pb-2 text-lg text-[#AB8966] font-bold '>Procedimentos</h3>
                <ul>
                    <li className='w-full'><a className='py-1 text-sm text-slate-500 hover:text-[#E6C69D] transition-all duration-200' href="/">Procedimento 1</a></li>
                    <li><a className='py-1 text-sm text-slate-500 hover:text-[#E6C69D] transition-all duration-200' href="/">Procedimento 2</a></li>
                    <li><a className='py-1 text-sm text-slate-500 hover:text-[#E6C69D] transition-all duration-200' href="/">Procedimento 3</a></li>
                </ul>
            </div>

            <div className='md:w-1/4 max-h-72 mt-2 md:mt-0'>
                <div className='w-full h-full'>
                <iframe title= "teste" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900.0426285050187!2d-54.576122370751165!3d-25.532696488852054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6905014c969f5%3A0x2d3db8b2e1396730!2sCataratas%20JL%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1651707636538!5m2!1spt-BR!2sbr" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About