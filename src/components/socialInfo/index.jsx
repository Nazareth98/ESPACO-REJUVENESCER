import React from 'react'

const FindUsInfo = (props) => {
  return (
    <div>
        <div className='flex flex-row items-center'>
          <img src={props.img} alt="" />
          <h3 className=' ml-1 text-2xl font-semibold text-[#AB8966]'>{props.titulo}</h3>
        </div>
        <div className='px-5 py-2'>
          <ul>
              {props.lista.map((item) => <li key={item.id} className="flex flex-row"><img src={item.icon} alt="" /><a href={item.url}>{item.content}</a></li>)}
          </ul>
        </div>
        
    </div>
  )
}

export default FindUsInfo