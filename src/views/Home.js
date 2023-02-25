import React from 'react'
import './Home.css'
import BackgroundImg from '../assets/pixel-me.png'


const Home = () => {
  return (
    <div className='home-page'>
        <div className='background-img'>
            <h2>Joachim Karlsson</h2>
            <h4>Junior Frontend Developer</h4>
            <img src={BackgroundImg} alt="A picture of me!" />
            
        </div>
    </div>
  )
}

export default Home