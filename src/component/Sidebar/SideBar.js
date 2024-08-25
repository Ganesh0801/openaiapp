import React from 'react';
import "./SideBar.css";
import Logo from "../../assets/log.png";
import Menu from "../../assets/Menu name.png";
import Theme from "../../assets/switch1.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className='logo'>
        <img src={Logo} alt='Logo' className='Logo'/>
      </div>
      <div className='listItem'>
        <img src={Menu} alt='Menu' className='Menu'/>
      </div>
      <div className='theme'>
        <img src={Theme} alt='ThemeSwitch' className="switch1"/>
      </div>
    </div>
  );
}

export default SideBar;
