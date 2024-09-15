import React from 'react'
import './ShopAll.scss'
import Product from '../../components/product/Product.jsx';
import all_data from '../../assets/data/all_products.js';

const ShopAll = () => {
  return (
    <div className='shop'>
      <div className="left-shop">

        <div className="filter">
          <h1>Filter by:</h1>
          {/* first */}
          <div className="filter-items">
            <h3>Type:</h3>
            <div className="list">
                {/* first */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>Citrus</p>
                </div>
                {/* other */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>indoors</p>
                </div>
                {/* other */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>outdoors</p>
                </div>
            </div>
          </div>
          {/* other */}
          <div className="filter-items">
            <h3>Price:</h3>
            <div className="list">
                {/* first */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>Citrus</p>
                </div>
                {/* other */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>indoors</p>
                </div>
                {/* other */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>outdoors</p>
                </div>
            </div>
          </div>
          {/* other */}
          <div className="filter-items">
            <h3>Water Needs:</h3>
            <div className="list">
                {/* first */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>Citrus</p>
                </div>
                {/* other */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>indoors</p>
                </div>
                {/* other */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>outdoors</p>
                </div>
            </div>
          </div>
          {/* --- */}
        </div>
      </div>


      <div className="right-shop">
        <div className="products">
          {all_data.map((item)=>{
            return <Product name={item.name} image={item.image} des={item.des} price={item.price} category={item.category} id={item.id}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default ShopAll
