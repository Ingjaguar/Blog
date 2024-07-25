import React from "react";

export default function Titutlo({ title, category }) {
    
    let customClass;
    
    if (category === "tech") {
       customClass = "text-danger"; 
    } else {
        customClass = "text-primary";
    }

    return(
        <h1 className={customClass}>{title}</h1>
    );

}