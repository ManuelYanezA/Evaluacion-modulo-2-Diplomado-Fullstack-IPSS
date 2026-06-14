import './Header.css';
import CartButton from '../CartButton/CartButton';

function Header(propiedades) {
    
    return (
        <header className="header">
            <div className="headerTop">
                <div className="brandContainer">
                    <img className="logo" src={propiedades.logo} alt={propiedades.titulo} />
                    <h1 className="headerTitle">{propiedades.titulo}</h1>
                </div>
                <CartButton cantidad={0} funcion={() => alert("Carrito")} />
            </div>

            <ul className="navList">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#about">Sobre Nosotros</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>

        </header>
    )
}

export default Header;