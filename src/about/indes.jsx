import React from 'react'
import logo from '../assets/marca.png'
import whatsapp from "../assets/whatsapp.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

const About = () => {
  return (
    <div className='w-full md:h-[20rem] py-10'>
        <div className='xl:w-4/6 w-full h-full m-auto flex flex-row'>
            <div className='w-1/4 p-2'>
                <div>
                    <a href="/"><img src={logo} alt="" className='w-4/6'/></a>
                </div>
                <div>
                    <p>Av. República Argentina, 3339 - Campos do Iguacu, Foz do Iguaçu - PR, 85857-118</p>
                </div>
                <div>
                    <p>CNPJ: 40.774.357/0001-41</p>
                </div>
                <div className='flex'>
                    <img src={whatsapp} alt="" srcset="" />
                    <img src={instagram} alt="" srcset="" />
                    <img src={facebook} alt="" srcset="" />
                </div>
            </div>

            <div className='w-1/4 p-2'>
                <h3>Menu</h3>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Procedimentos</a></li>
                    <li><a href="/">Fale Conosco</a></li>
                </ul>
            </div>

            <div className='w-1/4 p-2'>
                <h3>Procedimentos</h3>
                <ul>
                    <li><a href="/"></a>Procedimento</li>
                    <li><a href="/"></a>Procedimento</li>
                    <li><a href="/"></a>Procedimento</li>
                    <li><a href="/"></a>Procedimento</li>
                </ul>
            </div>

            <div className='w-1/4'>
                <div className='w-full h-full'>
                <iframe title= "teste" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900.0426285050187!2d-54.576122370751165!3d-25.532696488852054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6905014c969f5%3A0x2d3db8b2e1396730!2sCataratas%20JL%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1651707636538!5m2!1spt-BR!2sbr" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About