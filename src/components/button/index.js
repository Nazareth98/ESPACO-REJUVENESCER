import React from 'react';
import './styles.css'

const Button = (props) => {
  return (
    <div id='container'><a href={props.link} target="_blank"><button className="hover:bg-[#AB8966] bg-[#E6C69D] rounded-full  text-white py-3 pl-4 pr-10 duration-300 "><span id='btn'>{props.name}</span></button></a></div>
  )
}

export default Button