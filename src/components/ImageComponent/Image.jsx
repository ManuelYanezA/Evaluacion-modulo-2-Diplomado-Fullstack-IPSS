import "./Image.css";

function Image (propiedades) {
    return (
        <div className="imageContainer">
            {propiedades.isDestacado === true &&
                (<div className="featured">
                    <p>Producto Destacado</p>
                </div>)
            }

            <img className={propiedades.class} src={propiedades.imageURL}></img>
        </div>
    )
}

export default Image;