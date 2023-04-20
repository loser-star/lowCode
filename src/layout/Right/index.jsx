import React from 'react'

import {RightStyleDiv} from './style'
import { useCanvasByContext } from '@/hooks'
import EditCmp from '@/componts/EditCmp'
import EditCanvas from '@/componts/EditCanvas'
 const Right = () =>{
  const canvas  = useCanvasByContext()
  const data = canvas.getSelectedCmp();
  return (
    <RightStyleDiv>
      {data? <EditCmp /> : <EditCanvas />}
    </RightStyleDiv>
  )
}

export default Right