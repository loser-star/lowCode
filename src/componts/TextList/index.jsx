import React from "react";
import { LeftMenuStyleDiv } from "./style";
import { settings } from "./data";
import { useCanvasByContext } from "@/hooks";
export default function TextList() {
  const canvas = useCanvasByContext();
  const addCmp = (_cmp) => {
    console.log(_cmp);
    canvas.addCmp(_cmp);
  };
  return (
    <LeftMenuStyleDiv>
      <ul className="box">
        {settings.map((item) => (
          <li
            key={item.value}
            className="item"
            onClick={() => addCmp({ ...item,type:'text' })}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </LeftMenuStyleDiv>
  );
}
