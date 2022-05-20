import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';
const columnTitle = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {columnTitle.map((item, idx) => (
          <div className="header-block" key={idx}>
            <span key={Math.random()}>{item}</span>
          </div>
        ))}
      </div>
      <CheckoutItem />
    </div>
  );
};

export default Checkout;
