import './ProductCard.css';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage';

function ProductCard(propiedades) {
    return (
        <div className="productCard">
            <ProductImage clase="productImage" imageURL={propiedades.imageURL} altText={propiedades.nombre} />
            <h2 className="productName">{propiedades.nombre}</h2>
            <p className="productPrice">{propiedades.precio}</p>
            <div className="buttonContainer">
                <Button clase="addToCartBtn" titulo="Agregar al carrito" onClick={propiedades.onAddToCart}/>
                <Button clase="seeMoreBtn" titulo="Ver más" onClick={propiedades.onSeeMore}/>
            </div>
        </div>
    )
}

export default ProductCard;