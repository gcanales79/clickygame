import React from "react";
import "./Card.css";

const Card = props => (
    <div className="col">
    <img className="playerImage" src={props.image} alt={props.id} onClick={()=>props.playGame(props.id)}/>

    </div>
);

export default Card;