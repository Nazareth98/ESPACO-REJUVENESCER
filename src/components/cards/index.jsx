import React from 'react'
import Button from '../button'

const Card = ({name, description, img_url,}) => {

  return (
    <div className='w-80 p-6 my-2 md:my-0 bg-slate-100 rounded-3xl flex flex-col items-center justify-center hover:scale-105 duration-200 shadow-md'>
        <img src={img_url} alt="" className='rounded-2xl h-50 border-4 border-[#E6C69D] hover:border-[#AB8966] duration-300 '/>
        <h3 className='my-2 text-xl font-bold'>{name}</h3>
        <p className='my-2 text-center'>{description}</p>   
        <div className='mt-2'><Button link="https://api.whatsapp.com/send?phone=5545984070668&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas!" name= 'Tire suas dúvidas'/></div>
    </div>
  )
}

export default Card