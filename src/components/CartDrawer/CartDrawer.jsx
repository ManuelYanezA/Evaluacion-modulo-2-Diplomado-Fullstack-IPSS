import './CartDrawer.css';

function CartDrawer({ isOpen, onClose, carrito }) {
    if (!isOpen) return null;
    console.log(carrito);

    console.log(typeof carrito[0]?.precio);
    console.log(carrito[0]?.precio);
    return (
        <div className="drawerOverlay" onClick={onClose}>
            <div className="cartDrawer" onClick={(e) => e.stopPropagation()}>
                <div className="drawerHeader">
                    <h2>Carrito</h2>
                    <button className="closeButton" onClick={onClose}>
                        X
                    </button>
                </div>
                <div className="drawerContent">
                    {carrito.length === 0 ? (
                        <p>Tu carrito está vacío.</p>) : (
                            carrito.map((producto, indice) => (
                                <div key={indice} className="cartItem">
                                    <img src={producto.imageURL} alt={producto.nombre} />
                                    <div className="cartItemInfo">
                                        <h3>{producto.nombre}</h3>
                                        <p>${producto.precio}</p>
                                    </div>
                                </div>
                            )))
                    }
                </div>    
            </div>
        </div>
  );
}

export default CartDrawer;