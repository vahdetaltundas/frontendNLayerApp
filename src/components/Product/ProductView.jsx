import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import cardPicture from '../../assist/img/indir.jfif'
import ProductApi from '../../services/ProductApi';

class ProductView extends Component {
  static displayName="Product_View";

  constructor(props){
    super(props);

    this.state={
      id: localStorage.getItem("product_data_id"),
      responseDto:{}
    }
    // BIND
  }

  // CDN
  componentDidMount = () => {
    ProductApi.GetById(this.state.id).then((response)=>{
      this.setState({
        responseDto:response.data.data
      })
    })    
  }
  
  // Function

  render() {
    console.log(this.props);
    const {id,name,price,stock,createdDate}=this.state.responseDto;
    const {t}=this.props;
    return (
      
      <React.Fragment>
        <br /><br /><br />
        <div className='container'>
          <div className='col-md-6 offset-md-3 '>
          <div className="card">
          <img src={cardPicture} alt="" />
          <div className="card-body mx-auto">
            <h4 className="card-title"><b>{t("product_id")}:</b> {id}</h4>
            <p className="card-text"><b>{t("product_name")}:</b> {name} </p>
            <p className="card-text"><b>{t("product_price")}:</b> {price} </p>
            <p className="card-text"><b>{t("product_stock")}:</b> {stock} </p>
            <p className="card-text"><b>{t("date")}</b> {createdDate} </p>
          </div>
        </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default withTranslation()(ProductView);