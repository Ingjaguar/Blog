import Button from '../ui/Button.jsx';
import Titutlo from '../ui/Titulo.jsx';
import Descricion from '../ui/Descripcion.jsx';
import Imagen from '../ui/Imagen.jsx';

export default function Article({ articulo, deleteFunction, indice, showDetail }) {
    
    

    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <Imagen 
                    urlImagen={articulo.urlImagen}
                />
                <div className="col-lg-6">
                    <Titutlo  
                        title={articulo.titulo}
                        category={articulo.categoria}
                    />
                    <Descricion 
                        parrafo={articulo.descripcion}
                    />
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Button 
                            type={"details"}
                            title={articulo.textoBoton}
                            showDetail={showDetail}
                            indice={indice}
                        />
                        <Button
                            type={"like"}
                        />
                        <Button
                            type={"dislike"}
                        />
                        <Button
                            type={"delete"}
                            deleteFunction={deleteFunction}
                            indice={indice}
                        />                        
                    </div>
                </div>
            </div>
        </div>
    )
}