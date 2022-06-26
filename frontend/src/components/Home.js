import React from 'react'
import "../styles/home.css";

const Home = () => {
  return (
    <div className='home'>
      <img className='vector-home' alt='bkg' src={process.env.PUBLIC_URL + `/assets/vector1.png`}/>
      <img className='vector-shoe' alt='bkg' src={process.env.PUBLIC_URL + `/assets/zapa.png`}/>
      font-family: 'STIX Two Text', serif;
    </div>
  )
}

export default Home