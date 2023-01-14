import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>185/D, Wendagame, Pasyala,</p>
                        <p>Sri Lanka</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>+94 183 1436</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>chathurar.99.bc@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>I am Chathura Dilshan Ranasinghe the founder & CEO of <span>Zebo</span> <span>creations</span>. I have been working as a Fiverr graphic designer and web developer for the past two years. I am well experienced with logo designing, graphic designing, and Web development.</p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaTwitter size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaGithub size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaInstagram size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer