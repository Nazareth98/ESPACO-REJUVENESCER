import React from 'react'
import Subtitle from '../components/subTitle'
import nosEncontre from '../assets/nosEncontre.png'
import location from '../assets/location.svg'

const FindUs = () => {
  const faleConosco = [
    {
      id: 1,
      title: 'Fale conosco',
      content: 'Av. Mário Filho, 1234 - Campos do Iguacu, Foz do Iguaçu - PR, 85857-200',
      icon: location
    },
    {
      id: 2,
      title: 'Fale conosco',
      content: 'Av. Mário Filho, 1234 - Campos do Iguacu, Foz do Iguaçu - PR, 85857-200',
      icon: location
    },
  ]




  return (
    <div className='w-full md:h-[50rem]'>
        <Subtitle value='Onde Nos Encontrar' />
        <div className='lg:w-4/6 w-full m-auto flex flex-row'>
            <div className='w-1/2 h-50 p-10'>
                <img className='w-full rounded-md' src={nosEncontre} alt="" />
            </div>
            <div className='w-1/2'>
                <div>
                    <h3>Rejuvenescer - Foz do Iguaçu</h3>
                    <ul>
                      <li><a href=""></a></li>
                      <li><a href=""></a></li>
                    </ul>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default FindUs