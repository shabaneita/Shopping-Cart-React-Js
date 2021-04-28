import React, { Component } from 'react';
import Navbar from './navbar';
import ShoppingCart from './shoppingCart';
class App extends Component {
    state = {
   
        products: [
          { id: 1, name: "Brger", count: 3 , imgUrl: "/logo192.png"},
          { id: 2, name: "Fries", count: 2 , imgUrl: "/logo192.png"},
          { id: 3, name: "Cola", count: 1, imgUrl: "/logo192.png", },
        ],
      };
    
      handelDelete = (product) => {
        // console.log(product);
    
        //Clone state
        // Edit
    
        const products = this.state.products.filter((p) => p.id !== product.id);
    
        // set state
    
        this.setState({ products });
      };
    
      handelReset = () => {
        // this.state.products.count = 0;
        //1-clone 
    
        let Products= this.state.products;
       // console.log(Products);
        //2-edit
    Products=Products.map(p=>{
        p.count=0;
        return p;
    });
    
        //3-delete
    
        this.setState({Products})
      };
    
    
    
      IncreanmentHandeler = product => {
    
        //clone
    
    const  products=[...this.state.products];
    const index=products.indexOf(product);
    products[index]={...products[index]};
    
    //edit
    
    products[index].count++;
    //setstate
    
    this.setState({products});
    
      };
    
      DeincreamentHandeler = (product) => {
    
        // clone
    // clone of array and clone of object
    
        const products=[...this.state.products];
      const index=  products.indexOf(product);
      products[index]={...products[index]}
      //edit
      products[index].count--;
      //setstate
      this.setState({products});
      };
    
    render() { 
        return ( 

<React.Fragment>

{/* <Navbar productsCount={this.state.products.length}> */}
<Navbar productsCount={this.state.products.filter(p=>p.count>0).length}>
    
</Navbar >
<main className="container">
<ShoppingCart  products ={this.state.products} 
 onDelete={this.handelDelete}
 onIncreament={this.IncreanmentHandeler}
 onDeincreament={this.DeincreamentHandeler}
onReset={this.handelReset}

/>
</main>
</React.Fragment>

         );
    }
}
 
export default App;