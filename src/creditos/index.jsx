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
                    <div><a href="https://api.whatsapp.com/send?phone=5545998550838&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20com%20voc%C3%AA!" target="_blank" rel='noreferrer'><img src={whatsapp} alt="" srcset="" /></a></div>
                    <div  className='ml-2'><a href="https://www.instagram.com/patricnazareth/" target="_blank" rel='noreferrer'><img src={instagram} alt="" srcset="" /></a></div>
                    <div  className='ml-2'><a href="https://www.facebook.com/patrick.silva.182/" target="_blank" rel='noreferrer'><img src={facebook} alt="" srcset="" /></a></div>
                    <div  className='ml-2'><a href="https://github.com/Nazareth98" target="_blank" rel='noreferrer'><img src={gitHub} alt="" srcset="" /></a></div>
                </div>
        </div>
    </div>
  )
}

export default Creditos