import React from 'react'
import { Children } from 'react'

function Flex({children,className}) {
  return (
    <>
      <div className={`flex items-center ${className}`}>
        {children}
      </div>
    </>
  )
}

export default Flex
