import React from "react";

export default function ArticleDetails({indice,newsFeed,goBack}) {
    
    return(
        <div className="container">
            <button className="btn btn-primary bi bi-arrow-left-circle-fill" onClick={() => goBack(-1)}> Atrás</button>
            <h1 className="d-flex justify-content-center">{newsFeed[indice].titulo}</h1>
            <img 
                src={newsFeed[indice].urlImagen} 
                className="d-flex mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
            />
            <p className="d-flex">{newsFeed[indice].descripcion}</p>
            <p className="d-flex">{newsFeed[indice].autor}</p>
        </div>
    );
}