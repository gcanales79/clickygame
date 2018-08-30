import React from "react";
import "./Header.css";

const Header = props => (
    <div className="row justify-content-around align-items-center title sticky-top">
        <div className="col-3 text-center">
            <h1>Clicky Game</h1>
        </div>
        <div className={props.color}>
        <h2>{props.message}</h2>
        </div>
        <div className="col-4 text-left">
        <h2>Score: {props.score} | Top Score: {props.topscore}</h2>
        </div>
    </div>

)
export default Header;