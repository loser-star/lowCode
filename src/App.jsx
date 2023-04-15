import "./AppStyle.js";
import { AppStyleDiv } from "./AppStyle.js";
import Header from "./layout/Header";
import Left from "./layout/Left";
import Right from "./layout/Right";
import Center from "./layout/Center";
import { useCanvas } from "./store/index.js";
import { CanvasContext } from "./hooks/index.js";
function App() {
  const canvas = useCanvas();
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
