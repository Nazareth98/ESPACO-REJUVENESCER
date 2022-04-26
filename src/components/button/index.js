import React from 'react'


const Button = (props) => {
  return (
    <button className="hover:bg-[#AB8966] bg-[#E6C69D] rounded-full  text-white py-2 px-6 duration-300 ">{props.name}</button>
  )
}

export default Button