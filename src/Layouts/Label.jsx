import React from 'react'

function Label({id,labelText, className}) {
  return (
    <>
      <label htmlFor={id} className={`${className}`}>{labelText}</label>
    </>
  )
}

export default Label
