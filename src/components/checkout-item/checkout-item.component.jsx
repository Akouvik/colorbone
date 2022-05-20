import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = () => {
  const {
    cartItems,
    addItemToCart,
    deleteItemFromCart,
    removeProduct,
    cartTotal,
  } = useContext(CartContext);
  const addItem = (item) => addItemToCart(item);
  const deleteItem = (item) => deleteItemFromCart(item);
  const removeItem = (item) => removeProduct(item);

  return (
    <>
      {cartItems.map((item) => (
        <div className="checkout-item-container" key={item.id * Math.random()}>
          <div className="image-container">
            <img src={item.imageUrl} alt={`${item.name}`} />
          </div>
          <span className="name">{item.name}</span>

          <span className="quantity">
            <div className="arrow" onClick={() => deleteItem(item)}>
              &#10094;
            </div>
            <span className="value">{item.quantity}</span>
            <div className="arrow" onClick={() => addItem(item)}>
              &#10095;
            </div>
          </span>

          <span className="price">{item.price}</span>
          <div className="remove-button" onClick={() => removeItem(item)}>
            &#10005;
          </div>
        </div>
      ))}
      <div className="total">
        {cartItems.length > 0 && <span>TOTAL: ${cartTotal}</span>}
      </div>
    </>
  );
};

export default CheckoutItem;
