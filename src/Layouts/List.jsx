import React from 'react'

function List({className,liText}) {
  return (
    <>
      <li className={`${className}`}>{liText}</li>
    </>
  )
}

export default List
