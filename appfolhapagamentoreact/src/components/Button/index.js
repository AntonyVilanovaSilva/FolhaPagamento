import React from "react";
import './style.css'

function Button(props){
    const classeButton = " btn " + props.cor;
    return(
        <div className={classeButton} onClick={()=> props.onClick}>
            {props.label}
        </div>
    );
}

export default Button