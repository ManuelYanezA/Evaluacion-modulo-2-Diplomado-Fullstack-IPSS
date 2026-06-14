import './ProductList.css';
import { ProductCard } from '../ProductCard/ProductCard';

function ProductList() {
    return (
        <div className="productList">
            <ProductCard
                imageURL="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png"
                nombre="Camiseta de Algodón"
                precio="$9.990"
                isDestacado={true}
                onAddToCart={() => alert("Producto agregado al carrito")}
                onSeeMore={() => alert("Mostrando más detalles del producto")}
            />
        </div>
    );
}

export default ProductList;