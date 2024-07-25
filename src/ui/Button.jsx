import React from 'react';
import { useState } from 'react';

export default function Button({ type, deleteFunction, indice, title, showDetail }) {
    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        setLikes(likes + 1);
    }

    let customClass;
    let buttonText;
    let customFunction;

    switch (type) {
        case "like":
            customClass = "btn btn-success bi bi-hand-thumbs-up-fill mx-1";
            buttonText = likes;
            customFunction = handleClick;
            break;
        case "dislike":
            customClass = "btn btn-danger bi bi-hand-thumbs-down-fill mx-1";
            buttonText = likes;
            customFunction = handleClick;
            break;
        case "delete":
            customClass = "btn btn-warning bi bi-trash-fill mx-1";
            buttonText = "";
            customFunction = () => deleteFunction(indice);
            break;
        case "details":
            customClass = "btn btn-primary btn-lg px-4 me-md-2";
            buttonText = title;
            customFunction = () => showDetail(indice);
            break;
        default:
            customClass = "btn btn-info btn-lg d-block mx-1";
            buttonText = "Boton";
            break;
    }

    return (
        <button className={customClass} onClick={customFunction}>{buttonText}</button>
    )
}
