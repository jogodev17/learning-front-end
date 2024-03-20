import React from 'react'

const MyButton = ({type, label, onClick, className}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {label ? label : 'Input a label'}
    </button>
  )
}

export default MyButton