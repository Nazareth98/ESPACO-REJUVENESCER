import React from 'react'
import Input from '../components/input/index'
import Button from '../components/button/index'

const ScheduleForm = () => {
  return (
    <div className='w-full h-20 bg-[#e6c69d90] sticky bottom-0'>
        <div className='xl:w-4/6 w-full h-full m-auto flex flex-row items-center justify-around py-4'>
            <div className='lg:w-1/4 p-2'>
                <p className='lg:text-lg text-[#AB8966]'>Agende sua <span className='font-bold'>avaliação gratuita!</span></p>
            </div>
            <div className='w-2/4 flex-row hidden lg:inline-flex '>
                <Input type="text" placeholder="Seu nome"/>
                <Input type="email" placeholder="Seu Email"/>
                <Input type="tel" placeholder="Seu Telefone"/>
            </div>
            <div className='lg:w-1/6 text-center p-2'>
                <Button name= "Agendar"/>
            </div>
        </div>
    </div>
  )
}

export default ScheduleForm