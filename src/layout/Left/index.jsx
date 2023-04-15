import React from 'react'
import LeftMenuList from '@/componts/LeftMenuList'
import {LeftStyleDiv} from './style'
 const Left = () =>{
  const [isShow, setIsShow] = React.useState(false)
  return (
    <LeftStyleDiv>
     <div className='menu'>
     <ul>
        <li>
          <span  onClick={(e)=>{setIsShow(!isShow)}}>文本</span>
        </li>
      </ul>
     </div>
      {isShow && <LeftMenuList></LeftMenuList>}
    </LeftStyleDiv>
  )
}

export default Left