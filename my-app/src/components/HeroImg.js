import "./HeroImgStyles.css";

import React from 'react';

import IntoImg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

function HeroImg() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntoImg} alt="IntoImg" />
        </div>
        <div className="content">
            <p>hi, i'm a chathura</p>
            <h1>FULL STACK DEVELOPER</h1>
            <div>
                <Link to="/Projects" className="btn">Projects</Link>
                <Link to="/Contact" className="btn btn-light">Contact</Link>
            </div>
            <div className="scroll">
              <div className="scroll-icon">
                <span className="wheel"></span>
              </div>
              <p>scroll down</p>
            </div>
        </div>
    </div>
  );
};

export default HeroImg