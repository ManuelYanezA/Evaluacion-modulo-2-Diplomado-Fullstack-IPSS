import './CartButton.css';

function CartButton({ cantidad, funcion }) {
  return (
    <button className="cartButton" onClick={funcion}>
      🛒

      {cantidad > 0 && (
        <span className="cartBadge">
          {cantidad}
        </span>
      )}
    </button>
  );
}

export default CartButton;