import React from 'react'
import Button from '../button'
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({name, description, img_url,}) => {
  React.useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  return (
    <div className='w-80 h-full p-6 my-2 md:my-0 bg-slate-100 rounded-3xl flex flex-col items-center justify-evenly hover:scale-105 duration-200 shadow-lg'>
        <div className='h-30'>
          <img src={img_url} alt="" className='rounded-2xl h-50 border-4 border-[#E6C69D] hover:border-[#AB8966] duration-300'/>
        </div>
        <h3 className='my-2 text-xl font-bold'>{name}</h3>
        <p className='my-2 text-center'>{description}</p>   
        <div data-aos='fade' data-aos-once='true' data-aos-duration='1900' className='mt-2'><Button link="https://api.whatsapp.com/send?phone=5545984070668&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas!" name= 'Tire suas dúvidas'/></div>
    </div>
  )
}

export default Card