import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <a href=" "><div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>number</h4>
                </div></a>
                <a href=" " target="_"><div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>mail@email.com</h4>
                </div></a>
                <div className="location">
                    <a href=" " target="_"><FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Address line 1</p>
                        <p>Address line 2</p>
                    </div></a>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.</p>
                <div className="social">
                    <a href=" " target="_"><FaFacebook/></a>
                    <a href=" " target="_"><FaGithub/></a>
                    <a href=" " target="_"><FaTwitter/></a>
                    <a href=" " target="_"><FaInstagram/></a>
                    <a href=" " target="_"><FaLinkedin/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer