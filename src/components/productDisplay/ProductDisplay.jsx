import React from 'react' 
import './ProductDisplay.scss';
import PlantDetails from '../plantDetail/PlantDetails.jsx'

// each product structure


const ProductDisplay = (props) => {
  const {product} = props;
  
  return (
    <div className='all-product container-fluid'>
        <div className="chosen-item">
        <div className="left">
          <img src={product.image} alt='' />
          <div className="img-info">
            
          </div>
        </div>


        <div className="right">
          <div className="item-info">
            
          <h1>{product.name}</h1>
          <h4>${product.price}</h4>
          <p>{product.long_des}</p>

          <div className="item-ctas">
            <button className="add-to-cart" >Add to Cart <i class="fa-solid fa-cart-shopping"></i></button>
          </div>

          
          </div>
        </div>
      </div>


      <PlantDetails product={product} />



    </div>
  )
}

export default ProductDisplay;
