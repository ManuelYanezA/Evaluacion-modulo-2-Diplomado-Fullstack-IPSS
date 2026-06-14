import { useState } from 'react'
import './App.css'
import { ProductList, Header, Footer, Searchbar, CartDrawer } from './components';
import { products } from './mocks/products';

function App() {
  //const [count, setCount] = useState(0)
  //onClick={() => setCount((count) => count + 1)}
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((actual) => 
      [...actual, producto]);
  };

  const eliminarDelCarrito = (indiceProducto) => {
    setCarrito((actual) => actual.filter((_, i) => i !== indiceProducto));
  };

  return (
    <>
      <Header logo="https://cdn-icons-png.flaticon.com/512/8539/8539259.png" titulo="Tienda Online" abrirCarrito={() => setCarritoAbierto(true)} cantidadCarrito={carrito.length} />
      <Searchbar />
      <ProductList productos={products} onAddToCart={agregarAlCarrito} />
      <Footer titulo="Tienda Online" />
      <CartDrawer isOpen={carritoAbierto} onClose={() => setCarritoAbierto(false)} carrito={carrito} onRemove={eliminarDelCarrito}/>
    </>
  )
}

export default App
