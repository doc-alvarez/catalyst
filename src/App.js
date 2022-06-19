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
        <ShowKubik />
        <section>
          <div className='slide1'><h1 className="App-title">Catalyst</h1></div>
          <div className='slide2'><h3 className="App-title">
            We boost and accelerate e-commerce websites.
          </h3></div>
          <div className='slide3'><h4 className="App-title">
            We are scientific devs, passionate about performance and efficiency. Our results speaks by themselves. Trusted by top marketers.
            No more bounces or algorithm penalized for bad web vitals. We know how to optimize your website to get all the traffic.
          </h4></div>
          <div className='slide4'><h1 className="App-title">Trusted by:</h1></div>
          
        </section>
        <footer>2022 - Catalyst - All rights reserved.</footer>
      </main>
    </div>
  );
}

export default App;
