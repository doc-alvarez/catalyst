import React from 'react'
import './App.css';
import { ShowKubik } from './Components/Rubik.jsx'
import { ShowBull } from './Components/bull';
import { ShowRobot } from './Components/robot';
// import { ShowBaby} from './Components/baby'
import amyrisSvg from './Amyris.svg'
import tegra from './tegra.png'
import lcp from './LCP.svg'
import fid from './FID.svg'
import cls from './CLS.svg'
import noiranca from './noiranca.webp'
import evans from './evans.webp'
import scanlan from './scanlan.png'
import visiva from './logo-visiva.png'
import rock from './rock.png'
import cuka from './cuka.jpeg'
import alvarez from './alvarezlogo.svg'


function App() {
  const [slide, setSlide] = React.useState(1);
  const [goal, setGoal] = React.useState('');
  const modalRef = React.useRef();
  const slideRef = React.useRef();

  React.useEffect(() => {
    slideRef.current.style.opacity = 0;
    // slideRef.current.style.transform = 'translateX(100vw)';
    setTimeout(() => {
      slideRef.current.style.opacity = 1;
    }, 700)

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
    modalRef.current.style.transform = "scale(1)";
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
          { (slide === 6) ? <div id="5" className='hovered'>Learn</div> : <div id="6" onClick={(evt) => handleRoute(evt)}>Learn</div>}
        </header>
          { (slide === 2) ? <ShowKubik /> : null }
          { (slide === 1) ? <ShowBull /> : null }
          { (slide === 4) ? <ShowRobot /> : null }
          
          
          
        <div ref={slideRef} className='section'>
          <div className='slide1'>
            <h1 className="App-title">Catalyst</h1>
            <p className='App-subtitle'>Unleash Shopify speed.</p>
          </div>
          <div className='slide2'>
            <div className='slide2_title'>We build ultra-fast modern Shopify storefronts</div>
            
            <div className='main_goals'>
            { (goal === "a") ? <div onMouseLeave={() => modalRef.current.style.transform = 'scale(0)'} onClick={(e) => handleGoalChange(e)} className='hovered' id="a">HYDROGEN</div> : <div onClick={(e) => handleGoalChange(e)} onMouseLeave={() => modalRef.current.style.transform = 'scale(0)'} className="unhov" id="a">HYDROGEN</div>}
            { (goal === "b") ? <div onMouseLeave={() => modalRef.current.style.transform = 'scale(0)'} onClick={(e) => handleGoalChange(e)} className='hovered' id="b">PERFORMANCE</div> : <div onClick={(e) => handleGoalChange(e)} className="unhov" id="b" onMouseLeave={() => modalRef.current.style.transform = 'scale(0)'}>PERFORMANCE</div> }
            { (goal === "c") ? <div onMouseLeave={() => modalRef.current.style.transform = 'scale(0)'} onClick={(e) => handleGoalChange(e)} className='hovered' id="c">HEADLESS</div> : <div onClick={(e) => handleGoalChange(e)} className="unhov" id="c" onMouseLeave={() => modalRef.current.style.transform = 'scale(0)'}>HEADLESS</div> }
            { (goal === "d") ? <div onMouseLeave={() => modalRef.current.style.transform = 'scale(0)'} onClick={(e) => handleGoalChange(e)} className='hovered' id="d">SEO READY</div> : <div onClick={(e) => handleGoalChange(e)} className="unhov" id="d" onMouseLeave={() => modalRef.current.style.transform = 'scale(0)'}>SEO READY</div>}
            { (goal === "e") ? <div onMouseLeave={() => modalRef.current.style.transform = 'scale(0)'} onClick={(e) => handleGoalChange(e)} className='hovered' id="e">CACHING API</div> : <div onClick={(e) => handleGoalChange(e)} className="unhov" id="e" onMouseLeave={() => modalRef.current.style.transform = 'scale(0)'}>CACHING API</div> }
            { (goal === "f") ? <div onMouseLeave={() => modalRef.current.style.transform = 'scale(0)'} onClick={(e) => handleGoalChange(e)} className='hovered' id="f">STREAMING SSR</div> : <div onClick={(e) => handleGoalChange(e)} className="unhov" id="f" onMouseLeave={() => modalRef.current.style.transform = 'scale(0)'}>STREAMING SSR</div> }
            </div>
            <div ref={modalRef}className='slide2_modal'>
            { (goal === "a") ? <div>
            
              <div>⚡️ Preload LCP resource</div>
              <div>⚡️ Priority Hints - New!</div>
              <div>⚡️ Preconnect</div>
              <div>⚡️ Cache Policy</div>
              <div>⚡️ DNS-prefetch</div>
              <div>⚡️ Critical CSS</div>
              <div>⚡️ Defer non-critical Javascript</div>
              <div>⚡️ Async analytics and tracking</div>
            </div> : null}
            { (goal === "b") ? 
            <div>
              <div>⚡️ Code refactoring</div>
              <div>⚡️ Code splitting</div>
              <div>⚡️ Web workers API</div>
              <div>⚡️ Debug and optimize long tasks</div>
            </div> 
             : null}
            { (goal === "c") ? 
            <div>
              <div>⚡️ Image optimizations</div>
              <div>⚡️ Font-display / Swap</div>
              <div>⚡️ Header optimizations</div>
              <div>⚡️ Modals optimizations</div>
            </div> 
             : null}
            { (goal === "d") ? <img width="400" heigh="400" src={lcp}></img> : null}
            { (goal === "e") ? <img width="400" heigh="400" src={fid}></img> : null}
            { (goal === "f") ? <img width="400" heigh="400" src={cls}></img> : null}
           
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


          <div className='slide3'>
          <div className='container'>
          
          <p>
          We are passionate Software engineers with more than ten years of experience helping 
          DTC brands, digital marketers, influencers and developers improve Shopify websites performance and conversion rates.<br></br>
          </p>
          <h3>Our Value:</h3>
          <p>👇🏻</p>
          <p>100% custom solution for each client.</p>
          <p>No overhead.</p>
          <p>No complex and long setup.</p>
          <p>No domain hack.</p>
          <p>No automated 'One fits all' magical solutions.</p>
          <p>No scripts.</p>
          <p>No app installation.</p>
          <p>No extra fees.</p>
          </div>
          </div>
          <div className='slide4'>
          <div className='brands_container'>
            <img width="200" src={amyrisSvg} />
            
            <img width="100" src={tegra} />
            
            <img width="200" src={cuka}></img>

            <img width="200" src={alvarez}></img>

            <img style={{backgroundColor: 'transparent' }} src={visiva}></img>
            <img width="200" src={evans}></img>
            <img src={scanlan}></img>
            <img src={noiranca} style={{backgroundColor: 'transparent' }}></img>
          </div>
          </div>
          <div className='slide5'>
            <div className='product_container'>
              <div className='product'>
              <div>
                <h1>R2-D2</h1>
                <div>Subscription optimization</div>
                <div>Code Reviews</div>
                <div>Daily audits</div>
                <div>Team training</div>
                <div>Performance Budget</div>         
                <div>24/7 support</div>
              </div>
                <div className='price'>$29.99/m</div>
              </div>
              <div className='product'>
              <div>
                <h1>C-3PO</h1>
                <div>Full optimization</div>
                <div>One time</div>
                <div>For Critical stores</div>
              </div>
                <div className='price'>$499.99</div>
              </div>
              <div className='product'>
              <div>
                <h1>Yoda</h1>
                <div>Hydrogen Storefront</div>
                <div>Built from scratch</div>
                <div>Fully Customized</div>
                <div>Best Experience</div>
              </div>
                <div className='price'>$5000</div>
              </div>

            </div>
            
          </div>
          <div className='slide6'>
          <div>Learn from Google experts</div>
          <div className='product_container'>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fWoI9DXmpdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7Rrv9qFMWNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/AQqFZ5t8uNc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          
        </div>
        {/* <div className='hire'>Hire us</div> */}
        <footer>2022 - Catalyst - All rights reserved.</footer>
      </main>
    </div>
  );
}

export default App;
