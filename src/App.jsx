//import { useState } from 'react'
import './App.css'
import { ProductList, Header, Footer, Searchbar } from './components';
import { products } from './mocks/products';

function App() {
  //const [count, setCount] = useState(0)
  //onClick={() => setCount((count) => count + 1)}
  return (
    <>
      <Header logo="https://cdn-icons-png.flaticon.com/512/8539/8539259.png" titulo="Tienda Online" />
      <Searchbar />
      <ProductList productos={products} />
      <Footer titulo="Tienda Online" />
    </>
  )
}

export default App
