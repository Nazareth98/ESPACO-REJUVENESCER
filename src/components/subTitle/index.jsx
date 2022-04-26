import React from 'react'
import './styles.css'

const Subtitle = ({value}) => {
  
  return (
    <div className="relative">
        <h2 className="subtitle text-2xl font-bold p-10 text-center font-['Plus_Jakarta_Sans']">{value}</h2>
    </div>
  )
}

export default Subtitle