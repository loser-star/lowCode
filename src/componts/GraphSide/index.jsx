import React from 'react'
import {useCanvasByContext} from "@/hooks";
import {GraphSideWrapper} from "./style";
import {defaultCommonStyle} from "@/utils/const";

const defaultStyle = {
  ...defaultCommonStyle,
  width: 120,
  height: 120,
  borderColor: "blue",
  backgroundColor: "blue",
};

const settings = [
  {
    value: "1",
    style: {
      ...defaultStyle,
      borderWidth: 1,
      borderStyle: "solid",
      backgroundColor: "transparent",
    },
  },
  {
    value: "2",
    style: defaultStyle,
  },
];


export default function GraphSide() {

  const canvas = useCanvasByContext();
  const addCmp = (_cmp) => {
    canvas.addCmp(_cmp);
  };

 
  return (
    <GraphSideWrapper>

<ul className="box">
        {settings.map((item) => (
          <li
            key={item.value}
            className="item"
            style={{
              width: item.style.width,
              height: item.style.height,
              backgroundColor: item.style.backgroundColor,
              borderStyle: item.style.borderStyle,
              borderStyle: item.style.borderStyle,
              borderColor: item.style.borderColor,
            }}
            onClick={() => addCmp({...item, type: 'graphics'})}></li>
        ))}
      </ul>

    </GraphSideWrapper>
  )
}
