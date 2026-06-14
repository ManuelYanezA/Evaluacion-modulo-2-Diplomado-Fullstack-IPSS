import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';

function ProductList({ productos, onAddToCart }) {
    return (
        <div className="productList">
            {productos.map((producto) => (
                <ProductCard
                    key={producto.id}
                    imageURL={producto.imageURL}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    isDestacado={producto.isDestacado}
                    onAddToCart={() => onAddToCart(producto)}
                    onSeeMore={producto.onSeeMore}
                />
            ))}
        </div>
    );
}

export default ProductList;