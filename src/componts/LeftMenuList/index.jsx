import React from 'react'
import {LeftMenuStyleDiv} from './style'
import {settings} from './data'
import {useCanvasAddCmp} from '@/hooks'
export default function LeftMenuList() {

  const canvas = useCanvasAddCmp();


  return (
    <LeftMenuStyleDiv>
        <ul className="box">
        {settings.map((item) => (
          <li
            key={item.value}
            className="item"
            onClick={() => canvas.addCmp({ ...item })}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </LeftMenuStyleDiv>
  )
}
