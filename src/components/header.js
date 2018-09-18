import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.jpg'

const Header = () => (
  <div className="header">
      <div className="logo-box">
        <img src={logo} alt="Jthai-logo" className="logo"/>
      </div>
      <div className="text-box">
      <h1 className="heading-primary">
        <span className="heading-primary-main">ร้านอาหารเจไทย </span>
        <span className="heading-primary-sub">Thai Vegeterian Resturant</span>
      </h1>
       
      </div>

     
  </div>
)

export default Header
