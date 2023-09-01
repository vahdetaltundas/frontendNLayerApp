import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import ProductApi from '../../services/ProductApi';

class ProductView extends Component {
  static displayName="Product_View";

  constructor(props){
    super(props);

    this.state={
      id: localStorage.getItem("product_view_id"),
      responseDto:{}
    }
    // BIND
  }

  // CDN
  componentDidMount = () => {
    
  }
  
  // Function

  render() {
    console.log(this.props);
    return (
      
      <React.Fragment>
        <br /><br /><br />
        <div className="card">
          <img src="" alt="" />
          <h1>{this.state.id}</h1>
        </div>
      </React.Fragment>
    )
  }
}
export default withTranslation()(ProductView);