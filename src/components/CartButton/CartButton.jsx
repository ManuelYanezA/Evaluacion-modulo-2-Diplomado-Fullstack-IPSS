import './CartButton.css';

function CartButton({ cantidad, onClick }) {
  return (
    <button className="cartButton" onClick={onClick}>
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