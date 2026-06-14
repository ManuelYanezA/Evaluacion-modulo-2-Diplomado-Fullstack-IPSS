import './CartDrawer.css';

function CartDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="drawerOverlay" onClick={onClose}>
      <div
        className="cartDrawer"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="closeButton"
          onClick={onClose}
        >
          X
        </button>

        <h2>Carrito</h2>

        <p>Tu carrito está vacío.</p>
      </div>
    </div>
  );
}

export default CartDrawer;