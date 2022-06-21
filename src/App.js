import React from 'react'
import './App.css';
import { ShowKubik } from './Components/Rubik.jsx'
import { ShowBull } from './Components/bull';
import amyrisSvg from './Amyris.svg'
import tegra from './tegra.png'

function App() {
  const [slide, setSlide] = React.useState(1);
  const [goal, setGoal] = React.useState('');
  const detailsRef = React.useRef();
  
  React.useEffect(() => {
    window.scroll({
      left: (slide === 1) ? 0 : window.innerWidth * (slide -1),
      behavior: 'smooth'
    })

  }, [slide])
  
  // React.useEffect(() => {
  //   window.onclick = () => {
  //     setSlide(slide => {
  //       if (slide === 5) return 1
  //       return slide + 1
  //     })
  //   }
  // },[])
  function handleRoute(evt) {
    setSlide(() => Number(evt.target.id))
  }
  function handleGoalChange(e) {
    detailsRef.current.firstElementChild.style.transform = 'translateX(0)';
    detailsRef.current.style.opacity = "1";
    if (e.target.id) {
      setGoal(e.target.id);
    } else {
      setGoal('a')
    }
  }
  return (
    <div className="App">
      <main className="App-main">
        <header>
          { (slide === 1) ? <div id="1" className='hovered'>Root</div> : <div id="1" onClick={(evt) => handleRoute(evt)}>Root</div>}
          { (slide === 2) ? <div id="2" className='hovered'>What we do</div> : <div id="2" onClick={(evt) => handleRoute(evt)}>What we do</div>}
          { (slide === 3) ? <div id="3" className='hovered'>Who we are</div> : <div id="3" onClick={(evt) => handleRoute(evt)}>Who we are</div>}
          { (slide === 4) ? <div id="4" className='hovered'>Trusted Clients</div> : <div id="4" onClick={(evt) => handleRoute(evt)}>Trusted Clients</div>}
          { (slide === 5) ? <div id="5" className='hovered'>Our Products</div> : <div id="5" onClick={(evt) => handleRoute(evt)}>Our Products</div>}
        </header>
          { (slide === 2) ? <ShowKubik /> : null}
          { (slide === 1) ? <ShowBull /> : null }
          
          
        <div className='section'>
          <div className='slide1'>
            <h1 className="App-title">Catalyst</h1>
            <p className='App-subtitle'>Unleash Shopify speed.</p>
          </div>
          <div className='slide2'>
          <div className='main_goals' onClick={(e) => handleGoalChange(e)}>
            { (goal === "a") ? <div className='hovered' id="a">Loading Performance</div> : <div id="a">Loading Performance</div>}
            { (goal === "b") ? <div className='hovered' id="b">Interactivity</div> : <div id="b">Interactivity</div> }
            { (goal === "c") ? <div className='hovered' id="c">Visual Stability</div> : <div id="c">Visual Stability</div> }
          </div>
          <div ref={detailsRef} className='wrapper fadeOut'>
            <div className='details_container'>
          
          {
            (goal === "a") ? 
            <>
              <p>Simple and effective LCP optimizations.</p>
              <p>#1 Google Metric for SEO</p>
              <p>Proven custom techniques developed by our team</p> 
            </>
             : null
          }

            {(goal === "b") ? <p>Goal B</p> : null}
            {(goal === "c") ? <p>Goal C</p> : null}
            </div>
          </div>
          
          {/* <div>RAIL model performance</div>
          <div>FCP/LCP/CLS boost</div>
          <div>Code Splitting</div>
          <div>Tree Shaking</div>
          <div>Critical CSS</div>
          <div>Priority Hints</div>
          <div>Efficiently third-party script loading</div>
          <div>Web Workers API</div> */}

          </div>
          <div className='slide3'>
          <div className='container'>
          
          <h3>Our Value:</h3>
          <p>
          We are passionate Software engineers with more than ten years of experience helping 
          DTC brands, digital marketers, influencers and developers improve website performance and conversion rates.<br></br>
          </p>
          <p>👇🏻</p>
          <p>100% custom solution for each client.</p>
          <p>No overhead.</p>
          <p>No complex and long setup</p>
          <p>No domain hack</p>
          <p>No automated 'One fits all' magical solutions.</p>
          <p>No scripts.</p>
          <p>No app installation.</p>
          <p>No extra fees.</p>
          </div>
          </div>
          <div className='slide4'>
          <div className='brands_container'>
            <img width="200px" src={amyrisSvg} />
            <img width="100px" src={tegra} />
            <span className="App-logo"></span>
            <span className="App-logo"></span>
          </div>
          </div>
          <div className='slide5'>
            
          </div>
          
        </div>
        {/* <div className='hire'>Hire us</div> */}
        <footer>2022 - Catalyst - All rights reserved.</footer>
      </main>
    </div>
  );
}

export default App;
