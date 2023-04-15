import React, { useReducer,useEffect } from "react";
import "./AppStyle.js";
import { AppStyleDiv } from "./AppStyle.js";
import Header from "./layout/Header";
import Left from "./layout/Left";
import Right from "./layout/Right";
import Center from "./layout/Center";
import { useCanvas } from "./hooks/index.js";
import { CanvasContext } from "./hooks/index.js";
function App() {
  const canvas = useCanvas();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    const unsubscribe = canvas.subscribe(() => {
      forceUpdate();
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AppStyleDiv>
      <CanvasContext.Provider value={canvas}>
        <Header></Header>
        <div className="content">
          <Left></Left>
          <Center></Center>
          <Right></Right>
        </div>
      </CanvasContext.Provider>
    </AppStyleDiv>
  );
}

export default App;
