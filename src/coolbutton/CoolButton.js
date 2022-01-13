import React, { Component } from 'react';
import "bulma/css/bulma.css";
import "./CoolButton.css"
const CoolButton = (props) => {
    return (
        <div>
         <button className={props.className}>{props.text}</button>
        </div>
    )
}
export default CoolButton;