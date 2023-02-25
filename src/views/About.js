import React from 'react'
import './About.css'
import AboutImg from '../assets/barcelona-me.jpg'

const About = () => {
  return (
    <div className='about-page'>
        <h1>About</h1>
        <div className='about-intro'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quam quia quas possimus aliquid consequuntur facilis quo iste eum voluptatibus expedita vel a commodi, minus facere assumenda debitis, dolores eveniet.</p>
        </div>
        <div className='about-info'>
            <img src={AboutImg} alt="Me in Barcelona" />
            <div>
                <h3>Frontend Developer and CRM Consultant</h3>
                <div className='container'>
                    <div>
                        <h4>Birthday</h4>
                        <p>8 November 1994</p>
                        <h4>Website</h4>
                        <p>This one, lol</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>ljkarlsson@outook.com</p>
                        <h4>City</h4>
                        <p>Stockholm</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About