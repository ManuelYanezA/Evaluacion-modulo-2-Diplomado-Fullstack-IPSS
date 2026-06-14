import './CartDrawer.css';

function CartDrawer({ isOpen, onClose }) {
    if (!isOpen) return null;

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
                    <p>Tu carrito está vacío.</p>
                </div>
            </div>
        </div>
  );
}

export default CartDrawer;