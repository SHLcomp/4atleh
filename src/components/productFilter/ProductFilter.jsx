import React from 'react'
import ProductDisplay from '../productDisplay/ProductDisplay';
import { useParams } from 'react-router-dom';
import all_data from '../../assets/data/all_products';

// what will be shown for each product indivdually

const ProductFilter = () => {
  const {productId} = useParams();
  const product = all_data.find((e)=> e.id === Number(productId))

  return (
    <div>
      


      <ProductDisplay product={product}/>
    </div>
  )
}

export default ProductFilter;
