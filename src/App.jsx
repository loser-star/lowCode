
import './AppStyle.js';
import { AppStyleDiv } from './AppStyle.js';
import Header from './layout/Header';
import Left from './layout/Left';
import Right from './layout/Right';
import Center from './layout/Center';
function App() {
  return (
    <AppStyleDiv>
      <Header></Header>
      <div className='content'>
        <Left></Left>
        <Center></Center>
        <Right></Right>
      </div>
    </AppStyleDiv>
  );
}

export default App;
