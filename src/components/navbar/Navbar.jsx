import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      
        <nav className="navbar navbar-expand-lg">
        <Link className='a' to={"/"}><h1 className="navbar-brand">4atle</h1></Link>

        <div className="ctas">
        <div className="search-input">
          <input type="text" placeholder="Search..."/>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="!navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>


        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <Link className='a' to={"/"}><li className="nav-item nav-link"><i class="fa-solid fa-house"></i>Home</li></Link>
            <Link className='a' to={"/Favourites"}><li className="nav-item nav-link"><i class="fa-solid fa-heart"></i>Favourites</li></Link>
            <Link className='a' to={"/cart"}><li className="nav-item nav-link"><i class="fa-solid fa-cart-shopping"></i>Cart</li></Link>
            <Link className='a' to={"/signlogin"}><li className="nav-item nav-link"><i class="fa-solid fa-user"></i>Sign/Log in</li></Link>
          </ul>
        </div>
      </nav>

    </div>
  )
};

export default Navbar;
