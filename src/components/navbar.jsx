import React, { Component } from 'react';
import Product from './product';


const Navbar = (props) => {
    return (


//stateless function => component without state  
// we define it as function (sfc) 
// 1-didn't forget passing props 2- delete this because it's function not class  

        <nav className="navbar navbar-dark bg-dark">
  <span className="navbar-brand mb-0 h1">Navbar</span>
  <span className="badge badge-primary ">{props.productsCount}</span>

</nav>

      );
}
  
export default Navbar;