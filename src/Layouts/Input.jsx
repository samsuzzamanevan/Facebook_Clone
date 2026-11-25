import React from 'react'

function Input({type,onchange,inpText,value,id, className,accept}) {
  return (
    <>
      <input type={type} onChange={onchange} placeholder={inpText} value={value} id={id} className={`${className}`} accept={accept}/>
    </>
  )
}

export default Input
