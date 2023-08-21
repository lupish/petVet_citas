import React from 'react'

const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-white p-3 mb-3 font-bold text-lg text-center rounded-md uppercase">
        {children}
    </div>
  )
}

export default Error