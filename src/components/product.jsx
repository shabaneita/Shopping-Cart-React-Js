import React, { Component } from "react";

class Product extends Component {
  // state = {
  //   name: this.props.product.name,
  //   count: this.props.product.count,
  //   names: ["shaban", "Ramadan", "Hassan"],
  // };

  getClasses() {
    return this.props.product.count === 0
      ? "badge badge-warning m-2"
      : "badge badge-primary m-2";
  }

  // Conditional Rendering

  /*
renderNames()
{
    if (this.state.names.length===0) {
        
        return <h2>No Names </h2> ;

    } 
        return( <ul>{this.state.names.map(color=><li key={color}>{color}</li>)}</ul>);
    
}
*/
  /*
constructor()
{
    super();
    //1-Rebind this
    this.clickHandeler=this.clickHandeler.bind(this);

}
*/
 

  // increment = () => {
  //   this.IncreanmentHandeler(2);
  // };

  // decreament = () => {
  //   this.DeincreamentHandeler(2);
  // };

  

  render() {
    //const styles = { color:"red"};
    /*
       let classes;
       if (this.state.count===0) {

        classes='badge badge-warning m-2';
           
       } else {
        classes='badge badge-primary m-2';
           
       }

*/
    /*
 const classess = (this.state.count===0)?'badge badge-warning m-2':'badge badge-primary m-2';
*/

    return (
      <React.Fragment>
        {/* {this.state.names.length===0 && <h4>No Names</h4>}

                <ul>{this.state.names.map(color=><li key={color}>{color}</li>)}</ul> */}
        
        <div className='row m-auto container' > 
<div className="clo-3 text-center m-auto ">

<span className='' style={{ color: "red" }}>{this.props.product.name}</span>


</div>
<div className="col">
          {this.props.children}

          <img src={this.props.product.imgUrl} alt="Produc Img"  />
          <span className={this.getClasses()}>{this.props.product.count}</span>
          {/* {this.renderNames()} */}

          <button
            onClick={ 
            ()=>  this.props.onIncreament(this.props.product)
            }
            className="btn btn-primary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={
             ()=> this.props.onDeincreament(this.props.product)
            }
            className="btn btn-warning btn-sm m-2">-</button>
<span onClick={()=>this.props.onDelete(this.props.product)} >
<i className="fas fa-trash m-2"></i>

</span>
        </div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Product;
