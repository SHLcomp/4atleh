import React, {useContext} from 'react' 
import './ProductDisplay.scss';
import PlantDetails from '../plantDetail/PlantDetails.jsx';
import { ShopContext } from '../../context/ShopContext.jsx';

// each product structure


const ProductDisplay = (props) => {
  const {product} = props;
  const {incr} = useContext(ShopContext);
  return (
    <div className='all-products container-fluid'>
        <div className="chosen-item">

        <div className="left">
          <img src={product.image} alt='' />
          <div className="img-info"></div>
        </div>


        <div className="right">
          <div className="item-info">
            
          <h1>{product.name}</h1>
          <h4>${product.price}</h4>
          <p>{product.long_des}</p>

          <div className="item-ctas">
            <button className="add-to-cart" onClick={()=>incr(product.id, product.name, product.price, product.image)}>Add to Cart <i class="fa-solid fa-cart-shopping"></i></button>
          </div>

          </div>
        </div>
        
      </div>


      <PlantDetails product={product} />



    </div>
  )
}

export default ProductDisplay;
