import React from 'react';
import './Product.scss';
import { Link } from 'react-router-dom';

const Product = (item) => {
  return (
    <div>
      <div className="products-con container-fluid">
          <div className="products container">
            {/* html structure  */}
            <div className="product">
            <div className="product-img">
              <Link to={`/product/${item.id}`}><img src={item.image} alt={item.name} /></Link>
            </div>
            <div className="product-info">
              <h3>{item.name}</h3>
              <h6>{item.des}</h6>
              <p>${item.price}</p>

              <div className="cta">
                <div className="add">
                  <h6>Add to cart</h6>
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
              </div>

            </div>
          </div>
          </div>

      



      </div>
      
    </div>
  )
}

export default Product
