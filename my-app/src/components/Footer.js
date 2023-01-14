import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <a href="tel:+94 76 183 1436"><div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>+94 183 1436</h4>
                </div></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chathurar.99.bc@gmail.com" target="_"><div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>chathurar.99.bc@gmail.com</h4>
                </div></a>
                <div className="location">
                    <a href="https://goo.gl/maps/Qy6Mi8rsnLnRHRLp6" target="_"><FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>185/D, Wendagame, Pasyala,</p>
                        <p>Sri Lanka</p>
                    </div></a>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>I am Chathura Dilshan Ranasinghe the founder & CEO of <span>Zebo</span> <span>creations</span>. I have been working as a Fiverr graphic designer and web developer for the past two years. I am well experienced with logo designing, graphic designing, and Web development.</p>
                <div className="social">
                    <a href="https://www.facebook.com/chathura.ranasinghe.zebo/" target="_"><FaFacebook/></a>
                    <a href="https://github.com/ChatDil0" target="_"><FaGithub/></a>
                    <a href="https://twitter.com/ChathuraRanas15" target="_"><FaTwitter/></a>
                    <a href="https://www.instagram.com/__chathura._.ranasinghe__/" target="_"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/in/chathura-ranasinghe-925952222" target="_"><FaLinkedin/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer