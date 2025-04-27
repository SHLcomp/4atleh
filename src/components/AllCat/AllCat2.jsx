import React from 'react';
import all_data from '../../assets/data/all_products';
import Product from '../product/Product.jsx';
import './AllCat.scss'

const AllCat = (props) => {
  return (
    <div className='all-cat container'>
      {/* html structure */}
      {all_data.map((item,i) => {
          if (props.sub_category === item.sub_category)  {
            return <Product key={i} id={item.id} name={item.name} image={item.image} price={item.price} des={item.des} category={item.category} sub_category={item.sub_category}/>
          }
          else{
            return null;
          }
      })}
    </div>
  )
}

export default AllCat
