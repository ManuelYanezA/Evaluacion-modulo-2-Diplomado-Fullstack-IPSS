import { useState } from 'react'
import './App.css'
import { ProductList, Header, Footer, Searchbar, CartDrawer } from './components';
import { products } from './mocks/products';

function App() {
  // Estado para controlar si el carrito está abierto o cerrado
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  // Estado para almacenar los productos en el carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((actual) => 
      [...actual, producto]);
  };

  // Función para eliminar un producto del carrito, basado en su índice
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
