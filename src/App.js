import { useState, useRef, useEffect } from 'react'
import './css/styles.scss';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Menu from './components/Menu'
function App() {
  const [menuState, setmenuState] = useState({
    state: 'init',
    open: false,
  });

  const handelChangeMenuState = () => {
    if (menuState.state === 'init') {
      setmenuState({
        open: !menuState.open,
        state: 'open'
      });
    }
    else if (menuState.state === 'open' || menuState.state === 'close') {
      setmenuState({
        open: !menuState.open,
        state: menuState.state === 'open' ? 'close' : 'open'
      });
    }
  }
  return (
    <div className="App">
      <Navbar
        menuClick={() => handelChangeMenuState()}
        menuState={menuState}
      />
      <Header
        menuState={menuState}
      />
      <Menu
        menuState={menuState}
        menuClick={() => handelChangeMenuState()}
      />
    </div>
  );
}

export default App;
