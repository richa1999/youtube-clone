import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='hover:scale-105 px-5 py-2 m-3 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button