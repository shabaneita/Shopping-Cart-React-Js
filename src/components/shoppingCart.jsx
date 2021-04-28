import React, { Component } from "react";
import Product from "./product";
class ShoppingCart extends Component {
 
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center">Shopping Cart</h1>

        <button
          className="btn btn-secondary btn-m m-2"
          onClick={()=>this.props.onReset(this.props.products)}
        >
          Reset
        </button>
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.props.onDelete}
            onIncreament={this.props.onIncreament}
            onDeincreament={this.props.onDeincreament}
          ></Product>
        ))}
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
