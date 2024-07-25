import React from "react";

export default function SortButton({ alphaSort, sortAlpha }) {
    
    let customIcon;
    if (sortAlpha) {
        customIcon = "btn btn-secondary bi bi-sort-alpha-down"
    } else {
        customIcon = "btn btn-secondary bi bi-sort-alpha-up"
    }

    return(
        <div className="d-flex justify-content-center mt-2">
            <button className={customIcon} onClick={() => alphaSort()}> Ordenar</button>
        </div>
    );
}