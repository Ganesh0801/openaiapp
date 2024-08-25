import React from 'react'
import "./Home.css"
import Hero from "../Hero/Hero";
import Login from "../Login/Login"
const Home = () => {
  return (
   <>
    <div className="container">
            <Hero/>
            <Login/>
    </div>
   </>
  )
}

export default Home