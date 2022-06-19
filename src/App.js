import React from 'react'
import './App.css';
import { ShowKubik } from './Components/Rubik.jsx'


function App() {
  const path = React.useRef(window.location.pathname);
  
  return (
    <div className="App">
      <main className="App-main">
        <header>
        { (path.current == "/") ? <div className='hovered'>Base</div> : <div>Base</div>}
          <div>What we do</div>
          <div>Who we are</div>
          <div>Trusted Clients</div>
        </header>
        <h1 className="App-title">Catalyst</h1>
        <ShowKubik />
        <div className='App-cta'>Contact us</div>
        <footer>2022 - Catalyst - All rights reserved.</footer>
      </main>
    </div>
  );
}

export default App;
