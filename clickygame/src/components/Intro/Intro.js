import React from "react";
import "./Intro.css";

const Intro = props => (
    <div className="intro">
        <div className="row text-center align-items-center titleIntro">
            <div className="col">
                Clicky Game!
                </div>
        </div>
        <div className="row  text-center align-items-center titleInst">
            <div className="col">
                Click on an image to earn points, but don't click on any more than once!
                </div>
        </div>

    </div>

)
export default Intro;