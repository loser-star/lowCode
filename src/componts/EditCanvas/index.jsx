import React from 'react'
import {EditCanvasDiv} from './style'
import InputColor from "react-input-color";
// import InputColor from "@/lib/InputColor";
import { useCanvasByContext } from "@/hooks";
import { Item } from "@/lib/Item";
export default function EditCanvas() {


  const canvas = useCanvasByContext();
  const style = canvas.getCanvas().style;


  const handleStyleChange = (e, { name, value }) => {
    canvas.updateCanvasStyle({ [name]: value });
  };

  return (
    <EditCanvasDiv>
        <div className='title'>画布属性</div>

        <Item label="画布宽度 (px): ">
        <input
          type="number"
          className="itemRight"
          value={style.width}
          onChange={(e) => {
            handleStyleChange(e, { name: "width", value: e.target.value - 0 });
          }}
        />
      </Item>

      <Item label="画布高度 (px): ">
        <input
          type="number"
          className="itemRight"
          value={style.height}
          onChange={(e) => {
            handleStyleChange(e, { name: "height", value: e.target.value - 0 });
          }}
        />
      </Item>

      <Item label="背景颜色: ">
        <InputColor
          className="itemRight"
          initialValue={style.backgroundColor}
          onChange={(e) => {
            handleStyleChange(e, {
              name: "backgroundColor",
              value: e.hex,
            });
          }}
        />
      </Item>

      {/* <Item label="背景图片: ">
        <input
          type="text"
          className="itemRight"
          value={style.backgroundImage}
          onChange={(e) => {
            handleStyleChange(e, {
              name: "backgroundImage",
              value: e.target.value,
            });
          }}
        />
      </Item> */}


    </EditCanvasDiv>
  )
}


