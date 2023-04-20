import React from 'react'
import TextList from '@/componts/TextList'
import ImageList from '@/componts/imageList'
import {LeftStyleDiv} from './style'
 const Left = () =>{
  const [isShow, setIsShow] = React.useState(0)
  const _setShowSide = (value) => {
    if (isShow === value) {
      setIsShow(0)
    }else{
      setIsShow(value)
    }
  }
  return (
    <LeftStyleDiv>
     <div className='menu'>
     <ul>
        <li>
          <span  onClick={(e)=>{_setShowSide (1)}}>文本</span>
        </li>

        <li>
          <span  onClick={(e)=>{_setShowSide(2)}}>图片</span>
        </li>
      </ul>
     </div>
      {isShow === 1 && <TextList></TextList>}

      {isShow === 2 && <ImageList></ImageList>}
    </LeftStyleDiv>
  )
}

export default Left