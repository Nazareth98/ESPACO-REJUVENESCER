import React from 'react'
import PatrickLogo from '../assets/patrickLogo.png'
import whatsapp from "../assets/whatsapp-wt.svg";
import facebook from "../assets/facebook-wt.svg";
import instagram from "../assets/instagram-wt.svg";
import gitHub from "../assets/gitHub-wt.svg";

const Creditos = () => {
  return (
    <div className='w-full h-16 bg-[#AB8966]'>
        <div className="xl:w-4/6 w-full p-2 h-full m-auto flex flex-row justify-between">
            <div className='flex text-white items-center'>
                <p>Developed by</p>
                <div className='h-full'>
                    <img className='h-full' src={PatrickLogo} alt="" />
                </div>
            </div>
            <div className='flex py-2'>
                    <div><a href="/"><img src={whatsapp} alt="" srcset="" /></a></div>
                    <div  className='ml-2'><a href="/"><img src={instagram} alt="" srcset="" /></a></div>
                    <div  className='ml-2'><a href="/"><img src={facebook} alt="" srcset="" /></a></div>
                    <div  className='ml-2'><a href="/"><img src={gitHub} alt="" srcset="" /></a></div>
                </div>
        </div>
    </div>
  )
}

export default Creditos