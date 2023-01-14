import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import reactOne from "../assets/bg2.jpg";
import reactTwo from "../assets/bg2.jpg";

function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>I am a second-year undergraduate student at Eastern University Sri Lanka. I am a programmer, specializing in problem-solving and web development. Also, I works as a Fiverr Graphic designer and Front end Web developer for the last two years.</p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={reactOne} className="img" alt="reactOne"/>
                </div>
                <div className="img-stack bottom">
                    <img src={reactTwo} className="img" alt="reactTwo"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutContent;