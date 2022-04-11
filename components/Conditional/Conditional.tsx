import React, { FC } from 'react'

import { ConditionalProps } from './Conditional.types'

const Conditional: FC<ConditionalProps> = (props) => {
  if (props.condition === false) { return null }

  return (
    <>
      {props.children}
    </>
  )
}

export default Conditional
