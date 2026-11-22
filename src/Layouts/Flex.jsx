import React from 'react'
import { Children } from 'react'

function Flex({children,className}) {
    console.log(children)
  return (
    <>
      <div className={`flex items-center ${className}`}>
        {children}
      </div>
    </>
  )
}

export default Flex
