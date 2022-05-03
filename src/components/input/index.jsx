import React from 'react'

const Input = (props) => {
  return (
    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 mx-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder={props.placeholder} type={props.type} name="search"/>
  )
}

export default Input