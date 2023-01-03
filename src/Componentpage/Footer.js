import React from 'react'
import "./Footerstyle.css"
import { FaHome,FaFacebook,FaTwitterSquare} from "react-icons/fa"
import {BsTelephoneFill,BsLinkedin} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const Footer = () => {
  return (
    <div className='footer'>
                    <div className="footer-container d-flex justify-content-between p-5">
            <div className="left">
<div className="locate ">
    <div className="1 d-flex ">
    <FaHome  className='mx-3 fs-4 '/>
    <h5>B-201,Tulsi Height,Waghodiya road,vadodara</h5>
    </div>
    <div className="2 d-flex">
    <BsTelephoneFill className='mx-3 fs-4' />
    <h5>+91 8469047823</h5>
    </div>
    <div className="3 d-flex">
    < SiGmail className='mx-3 fs-4' /> 
    <h5>artijansari@gmail.com</h5>
    <h5>github.com/arti-jansari</h5>
    </div>
</div>

           

            </div>
            <div className="right">
                <h3>About Me</h3>
                <h5>I am Front end Developer</h5>
                <h5>i completed my course in Front-end Development</h5>
                <div className="icon d-flex fs-3 text-light">
                <FaFacebook className='mx-2'/>
                <FaTwitterSquare className='mx-2'/>
                <BsLinkedin className='mx-2'/>
                </div>
                  
            </div>
            
            </div>
      
    </div>
  )
}

export default Footer
