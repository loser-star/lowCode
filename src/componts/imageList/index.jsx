import React from "react";
import { LeftMenuStyleDiv } from "./style";
import { settings } from "./data";
import { useCanvasByContext } from "@/hooks";
export default function ImageList() {
  const canvas = useCanvasByContext();

  return (
    <LeftMenuStyleDiv>
      <ul className="box">
        {settings.map((item) => (
          <li
            key={item.id}
            className="item"
            onClick={() => canvas.addCmp({ ...item,type:'image' })}
          >
           <img src={item.value} alt="" />
          </li>
        ))}

        {/* {settings} */}
      </ul>
    </LeftMenuStyleDiv>
  );
}
