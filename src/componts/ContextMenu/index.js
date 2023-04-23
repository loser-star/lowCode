import React,{useContext} from 'react'
import {useCanvasByContext} from "@/hooks";
import classNames from "classnames";
import {LeftStyleDiv} from "./style";
export default function ContextMenu({index, style, cmp}) {
  const canvas = useCanvasByContext();
  console.log('style', style);
  const copy = (e) => {
    e.stopPropagation();

    const newCmp = JSON.parse(JSON.stringify(cmp));
    newCmp.style.top += 40;
    newCmp.style.left += 40;
    canvas.addCmp(newCmp);
  };

  const del = (e) => {
    e.stopPropagation();
    canvas.deleteCmp(index);
  };

  return (
    <LeftStyleDiv>
       <ul className={classNames("main")} style={style}>
      <li className={"item"} onClick={copy}>
        复制
      </li>
      <li className={"item"} onClick={del}>
        删除
      </li>
      <li className={"item"}>上移一层</li>
      <li className={"item"}>下移一层</li>
      <li className={"item"}>置顶</li>
      <li className={"item"}>置底</li>
    </ul>
    </LeftStyleDiv>
  )
}
