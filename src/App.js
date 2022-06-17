import speed from './speed.svg';
import styled from 'styled-components'
import './App.css';


function App() {
  return (
    <div className="App">
      <main className="App-main">
        <header>
          <div>Home</div>
          <div>Hire us</div>
          <div>Trusted Clients</div>
        </header>
        <h1 className="App-title">iCatalyst</h1>
        
          <span className='App-sub'>Taking your e-comm store  to another level.</span>
          <img width="50px" src={speed} alt=""></img>
        
        <div className='App-cta'>Contact us</div>
        <footer>2022 - iCatalyst - All rights reserved.</footer>
      </main>
    </div>
  );
}

export default App;
