import React from 'react'
import {CenterStyleDiv} from './style'
import {useCanvasData} from '@/hooks'
import Cmp from '../../compont/Cmp'
 const Center = () =>{
  const canvasData = useCanvasData()
  return (
    <CenterStyleDiv>
      <div className='canvas'>
        {canvasData.cmps.map((item)=>{
          return <Cmp key={item.key} data={item}></Cmp>
        } )}
      </div>
    </CenterStyleDiv>
  )
}

export default Center