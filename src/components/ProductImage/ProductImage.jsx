import "./ProductImage.css";

function ProductImage (propiedades) {
    return (
        <div className="imageContainer">
            {propiedades.isDestacado === true &&
                (<div className="featured">
                    <p>Producto Destacado</p>
                </div>)
            }

            <img className={propiedades.clase} src={propiedades.imageURL} alt={propiedades.altText} />
        </div>
    )
}

export default ProductImage;