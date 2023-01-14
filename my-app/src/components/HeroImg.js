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
            <p>hi, i'm a freelancer</p>
            <h1>REACT DEVELOPER</h1>
            <div>
                <Link to="/Projects" className="btn">Projects</Link>
                <Link to="/Contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  );
};

export default HeroImg