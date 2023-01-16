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
            <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.</p>
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