import React from 'react'
import logo from '../img/logo1.png'
import hero from '../img/hero-moto-logo1.jpg'
// import logo2 from '../img/logo.39b041adc108b3260a6c811f4e7c5fd0.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { BsSpeedometer2, BsListUl } from "react-icons/bs";
import { TbPhotoSensor } from "react-icons/tb";


const Navbar = (props) => {
  console.log(props);
  const { headline } = props;

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light mt-1">
   <img src={logo} alt="" className='logo'/>
   <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className={"navbar-nav ms-auto mb-2 mb-lg-0 "}>
        <li className="nav-item">
         <Link to="/" style={{textDecoration:'none'}}>
          <a className="nav-link " aria-current="page" href="/"
         >
             Dashboard
          </a>
          </Link>
        </li>
        <li className="nav-item">
            <Link to="/analogparameter" style={{textDecoration:'none'}} >
          <a className="nav-link "  aria-current="page" href="/" 
          >
            Analog parameter
          </a>
          </Link>
        </li>
         < li className="nav-item">
            <Link to="/vfdstatus" style={{textDecoration:'none'}}>
          <a className="nav-link " aria-current="page" href="/" 
          >
            VFD Status Display
          </a>
          </Link>
        </li>
      </ul>
    
    </div>
    <img src={hero} alt="" className='hero' />
  </div>
  <div>
  
  </div>
</nav> */}
      {/* <hr style={{border:'1.2px solid orangered ',width:'95%',margin:'auto'}}/> */}
      <nav className="navbar navbar-light  mt-1">
        <div className="container-fluid">
          <div className='logos'>
            <CiMenuBurger alt="" className="navbar-toggler"
              data-bs-toggle="offcanvas" data-bs-target="#cnvs"
            />
            <img src={logo} className='thetavega' />
          </div>

          <div className="offcanvas offcanvas-start " tabindex="-1"
            id="cnvs" aria-labelledby="offcanvasLabel"
            style={{ width: '15rem' }}>
            <div className="offcanvas-header" style={{ boxShadow: ' 0 8px 16px rgba(13, 11, 11, 0.2)' }}>
              <img src={hero} alt="" className='herologo' />

              {/* <h4 style={{color:'orangered'}} className="offcanvas-title ml-2" id="offcanvasLabel"><CiMenuBurger style={{margin:'0.5rem',color:'black'}}/>Menu</h4> */}
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body" style={{ backgroundColor: '#bb5516', }}>
              <ul className="navbar-nav  mb-2 mb-lg-0 " style={{ textAlign: 'left' }}>
                <li className="nav-item" >
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <a className="nav-link " aria-current="page" href="/"

                    >
                      <span style={{ display: 'flex', justifyContent: 'space-between', color: 'white', marginRight: '4.1rem' }}>
                        <BsListUl style={{ fontSize: '1.5rem' }} />
                        Dashboard</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/analogparameter" style={{ textDecoration: 'none' }} >
                    <a className="nav-link " aria-current="page" href="/"
                    >
                      <span style={{ display: 'flex', justifyContent: 'space-between', color: 'white', marginRight: '0.8rem' }}>
                        <BsSpeedometer2 style={{ fontSize: '1.5rem' }} />
                        Analog parameter</span>
                    </a>
                  </Link>
                </li>
                < li className="nav-item">
                  <Link to="/vfdstatus" style={{ textDecoration: 'none' }}>
                    <a className="nav-link " aria-current="page" href="/"
                    >
                      <span style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                        <TbPhotoSensor style={{ fontSize: '1.5rem' }} />
                        VFD Status Display</span>
                    </a>
                  </Link>
                </li>
                {/* <hr /> */}
              </ul>
            </div>
          </div>
          <div className='headline-nav'>
            <h1 style={{ fontWeight: 'bold' }}>{headline}</h1>
          </div>
          <img src={hero} alt="" className='hero' />
        </div>
      </nav>
      <div style={{ border: '3px solid orange', width: '95%', margin: 'auto' }}>
      </div>
    </>

  )
}

export default Navbar