import React from 'react'
import './ShopAll.scss'
import Product from '../../components/product/Product.jsx';
import all_data from '../../assets/data/all_products.js';
//context 
import ShopContextProvider from '../../context/ShopContext.jsx'; //i need to wrap this here & in App.js :(

const ShopAll = () => {
  return (
    <div className='shop'>
      <div className="left-shop">

        <form className="filter">
          <h1>Filter by:</h1>
          {/* first */}
          <div className="filter-items">
            <h3>Type:</h3>
            <div className="list">
                {/* first */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>Beauty Products</p>
                </div>
                {/* other */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>Indoors</p>
                </div>
                {/* other */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>Outdoors</p>
                </div>
            </div>
          </div>
          {/* other */}
          <div className="filter-items">
            <h3>Category:</h3>
            <div className="list">
                {/* first */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>Citrus</p>
                </div>
                {/* other */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>Bamboo</p>
                </div>
                {/* other */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>Roses</p>
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
                <p>Low</p>
                </div>
                {/* other */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>Average</p>
                </div>
                {/* other */}
                <div className="list-item">
                <input type="radio" name="" id="" />
                <p>High</p>
                </div>
            </div>
          </div>
          {/* --- */}
        </form>
      </div>

      <div className="right-shop">
        <div className="products">
          {all_data.map((item, i)=>{
            return (
              <ShopContextProvider>
                <Product key={i} name={item.name} image={item.image} des={item.des} price={item.price} category={item.category} id={item.id}/>
              </ShopContextProvider>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ShopAll
