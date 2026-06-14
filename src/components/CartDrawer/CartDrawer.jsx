import './CartDrawer.css';

function CartDrawer({ abierto, productos, onClose }) {
  return (
    <>
      {abierto && (
        <>
            <div className="drawerOverlay" onClick={onClose}/>
            <div className="drawer">
                <div className="drawerHeader">
                    <h2>Carrito</h2>
                    <button onClick={onClose}>
                        ✕
                    </button>
                </div>

                <div className="drawerContent">
                    {productos.length === 0 ? (
                        <p>El carrito está vacío.</p>
                    ) : (
                        productos.map((producto) => (
                            <div key={producto.id} className="cartItem">
                                <p>{producto.nombre}</p>
                                <p>{producto.precio}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
      )}
    </>
  );
}

export default CartDrawer;