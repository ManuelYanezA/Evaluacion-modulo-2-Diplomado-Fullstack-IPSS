import { useState, useEffect } from 'react'
import './App.css'
import { ProductList, Header, Footer, Searchbar, CartDrawer } from './components';
// import { products } from './mocks/products';

function App() {

  // Productos obtenidos desde API
  const [productos, setProductos] = useState([]);

  // Estado de carga
  const [cargando, setCargando] = useState(true);

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

  useEffect(() => {

    const obtenerProductos = async () => {
      try {

        const respuesta = await fetch(
          'https://dummyjson.com/products'
        );

        const datos = await respuesta.json();

        // Adaptar estructura API -> estructura app
        const productosAdaptados = datos.products.map(producto => ({
          id: producto.id,
          nombre: producto.title,
          precio: `$${producto.price}`,
          imageURL: producto.thumbnail,
          isDestacado: producto.rating >= 4.5
        }));

        setProductos(productosAdaptados);

      } catch(error) {

        console.error(
          'Error obteniendo productos:',
          error
        );

      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();

  }, []);

  return (
    <>
      <Header logo="https://cdn-icons-png.flaticon.com/512/8539/8539259.png" titulo="Tienda Online" abrirCarrito={() => setCarritoAbierto(true)} cantidadCarrito={carrito.length} />
      <Searchbar />
      {
        cargando
        ? <p>Cargando productos...</p>
        : (
          <ProductList
            productos={productos}
            onAddToCart={agregarAlCarrito}
          />
        )
      }
      <Footer titulo="Tienda Online" />
      <CartDrawer isOpen={carritoAbierto} onClose={() => setCarritoAbierto(false)} carrito={carrito} onRemove={eliminarDelCarrito}/>
    </>
  )
}

export default App
