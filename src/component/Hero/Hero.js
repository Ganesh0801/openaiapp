import React from 'react'
import "./Hero.css"
import logo from "../../assets/logo.png";
import girl from "../../assets/img.png";
import switch1 from "../../assets/switch1.png"
const Hero = () => {
  return (
    <>
    <div className="mainframe">
      <div className="small">
        <img className="logo" src={logo} alt='Logo'/>
        <h1 className='text'>Generate detailed reports with just one click</h1>
        <img className="girl" src={girl} alt="girl"/>
        <img className="switch" src={switch1} alt='switch'/>
      </div>
    </div>
    </>
  )
}

export default Hero