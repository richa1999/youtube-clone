import React from 'react'

const Button = ({ name }) => {
  return (
    <button className="m-2 px-4 py-1 rounded-lg bg-[#f1f1f1] hover:bg-gray-300 text-sm transition duration-200 whitespace-nowrap">
      {name}
    </button>
  )
}

export default Button
