import React from 'react'
// import { Link } from 'react-router-dom'

const Button = ({text="button", onClick , type="primary" }) => {
  if (type==="primary") {
    return (<button className='flex justify-center items-center bg-secondary border-none p-4 rounded-xl w-full cursor-pointer uppercase text-white text-xl' onClick={onClick}>
         {text}
    </button>)
  }
  if (type==="secondary") {
    return (<button className='flex justify-center items-center border border-solid bg-transparent border-dark-blue p-4 rounded-xl w-full cursor-pointer capitalize text-dark-blue text-xl' onClick={onClick}>
         {text} 
    </button>)
  }
}

export default Button
