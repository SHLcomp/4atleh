import React, { useContext } from 'react';
import './Cart.scss';
import { ShopContext } from '../../context/ShopContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { basket } = useContext(ShopContext);
  const { removeItem } = useContext(ShopContext);

  // Check if basket is undefined or empty
  if (!basket || basket.length === 0) {
    return (
      <div className="empty">
        <h3>The cart is empty...</h3>
      </div>
    )
    
  }
  return (
    <div className='cart'>
      {basket.map((item) => {
        return (
          <div key={item.id} className="items-con">
            {/* items */}
            <div className="item">
            <Link to={`/product/${item.id}`}><img src={item.image} alt={item.name} /></Link>
              <h3 className="item-name">{item.name}</h3>
              <h4 className="price">{item.price}$</h4>
              <div className="quantity">
              <h5>{item.quantity} </h5>
              <button>-</button>
              <button>+</button>
              </div>
              <button className="remove-btn" onClick={()=>removeItem(item.id)}>Remove</button>
            </div>
          </div>
        );
      })}
      <div className="checkout">
        <div className="total-price-detail">
          <h3>Total Price: 300$</h3>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>

      
    </div>
  );
};

export default Cart;
