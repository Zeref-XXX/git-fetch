
import React from "react";



export default function Cards(props) {
console.log("in cards");
    return (

        <div className="cards">
            <img src={props.image}></img>
            <h3>  {props.name}</h3>
            < a href={props.ulink} >Profile</a>
        </div>
    )
}