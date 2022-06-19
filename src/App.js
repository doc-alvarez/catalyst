import React from 'react'
import './App.css';
import { ShowKubik } from './Components/Rubik.jsx'
import amyrisSvg from './Amyris.svg'
import tegra from './tegra.png'

function App() {
  const [slide, setSlide] = React.useState(1);
  
  React.useEffect(() => {
    document.querySelector(`.slide${slide}`).scrollIntoView();  
  }, [slide])
  React.useEffect(() => {
    window.onclick = () => {
      setSlide(slide => {
        if (slide === 4) return 1
        return slide + 1
      })
    }
  },[])
  return (
    <div className="App">
      <main className="App-main">
        <header>
        { (slide === 1) ? <div className='hovered'>Root</div> : <div>Root</div>}
        { (slide === 2) ? <div className='hovered'>What we do</div> : <div>What we do</div>}
        { (slide === 3) ? <div className='hovered'>Who we are</div> : <div>Who we are</div>}
        { (slide === 4) ? <div className='hovered'>Trusted Clients</div> : <div>Trusted Clients</div>}
          
        </header>
        { (slide === 1) ? <ShowKubik /> : <ShowKubik hide={0.2}/>}

        <section>
          <div className='slide1'><h1 className="App-title">Catalyst</h1><p className='App-subtitle'>Unleash the speed.</p></div>
          <div className='slide2'>
      
          <div>RAIL model performance</div>
          <div>FCP/LCP/CLS boost</div>
          <div>Code Splitting</div>
          <div>Tree Shaking</div>
          <div>Critical Rendering Path Optimizations</div>
          <div>Priority Hints</div>
          <div>Efficiently third-party script loading</div>
          <div>Web Workers API</div>

          </div>
          <div className='slide3'>
            <div>We are software engineers</div>
            <div>Experts in Google Web vitals</div>
            <div>Full-stack experience</div>
            <div>Modern design patterns</div>
            <div>Ecommerce & Fintech</div>
            <br/>
            <div><a href="https://www.krishaweb.com/google-announced-core-web-vitals-new-ranking-factors/">Google’s Core Web Vitals: 2021 New Ranking Factors</a></div>
          </div>
          <div className='slide4'>
            <img width="200px" src={amyrisSvg} />
            <img width="100px" src={tegra} />
            <span className="App-logo"></span>
            <span className="App-logo"></span>
          </div>
          
        </section>
        <div className='hire'>Hire us</div>
        <footer>2022 - Catalyst - All rights reserved.</footer>
      </main>
    </div>
  );
}

export default App;
