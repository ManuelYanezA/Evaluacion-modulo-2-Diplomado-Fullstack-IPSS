import { useState, useEffect } from 'react'
import './App.css'
import { ProductList, Header, Footer, Searchbar, CartDrawer, Loader, ErrorMessage } from './components';
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

  // Estado para almacenar el texto de búsqueda
  const [textoBusqueda, setTextoBusqueda] = useState('');

  // Estado para mostrar mensaje de error
  const [error,setError] = useState(null);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((actual) => 
      [...actual, producto]);
  };

  // Función para eliminar un producto del carrito, basado en su índice
  const eliminarDelCarrito = (indiceProducto) => {
    setCarrito((actual) => actual.filter((_, i) => i !== indiceProducto));
  };

  // useEffect para obtener productos desde la API al montar el componente
  useEffect(() => {

    const obtenerProductos = async () => {

      try {

        setCargando(true);

        // Limpiar errores anteriores
        setError(null);

        const respuesta = await fetch(
          'https://dummyjson.com/products'
        );

        if (!respuesta.ok) {

          throw new Error('No se pudieron obtener productos');

        }

        const datos = await respuesta.json();

        const productosAdaptados =
        datos.products.map(producto => ({

          id: producto.id,
          nombre: producto.title,
          precio: `$${producto.price}`,
          imageURL: producto.thumbnail,
          isDestacado:
            producto.rating >= 4.5

        }
      )
    );

      setProductos(
        productosAdaptados
      );

    }
    catch(errorAPI) {

      console.error(
        'Error obteniendo productos:',
        errorAPI
      );

      // Guardar mensaje en estado
      setError(errorAPI.message);

    }
    finally {

      setCargando(false);

    }

  };

  obtenerProductos();

}, []);

  // Filtrar productos según el texto de búsqueda
  const productosFiltrados = productos.filter(
  producto =>
    producto.nombre?.toLowerCase()
      .includes(
        textoBusqueda.toLowerCase()
      )
);

  return (
    <>
      <Header logo="https://cdn-icons-png.flaticon.com/512/8539/8539259.png" titulo="Tienda Online" abrirCarrito={() => setCarritoAbierto(true)} cantidadCarrito={carrito.length} />
      <Searchbar textoBusqueda={textoBusqueda} setTextoBusqueda={setTextoBusqueda}/>
      {
    cargando? <Loader/>: error? <ErrorMessage mensaje={error}/>
    : (
        <ProductList
            productos={productosFiltrados}
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
