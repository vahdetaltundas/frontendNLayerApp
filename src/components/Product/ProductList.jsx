import React, { Component, useState } from "react";
import { withTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
// Product Api
import ProductApi from "../../services/ProductApi";

class ProductList extends Component {
  // Componentteki isim
  static displayName = "Product_List";

  // Constructor
  constructor(props) {
    super(props);
    // STATE
    this.state = {
      productList: [],
    };
    // BIND
    this.update=this.update.bind(this);
    this.view=this.view.bind(this);
    this.delete=this.delete.bind(this);
  }

  // CDM
  componentDidMount() {
    //const url='https://jsonplaceholder.typicode.com/posts';
    ProductApi.All()
      .then((response) => {
        this.setState({
          productList: response.data.data,
        }); //end setState
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  } //end CDM
  
  //FUNCTION
  view(id){
    // alert(id);
    localStorage.setItem("product_data_id",id)
    // window.open("/product/view/"+id);
  }
  update(id){
    // alert(id);
    localStorage.setItem("product_data_id",id)
  }
  delete(id){
    // alert(id);
    ProductApi.Remove(id).
    then((response)=>{
      this.setState({
        productList:this.state.productList.filter(temp_filter=>temp_filter.id!=id)
      })
    }).
    catch((err)=>{
      alert("Veri Silmede Hata Oluştu :"+err);
    });
  }

  render() {
    const { t } = this.props;
    const { productList } = this.state;
    return (
      <React.Fragment>
        <h1 className="text-center display-4 text-uppercase">{t("product_list")}</h1>
        <Link to="/product/create" className="btn btn-primary"><i className="fa-solid fa-plus"></i> {t("product_create")}</Link>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>{t("product_name")}</th>
              <th>{t("product_price")}</th>
              <th>{t("product_stock")}</th>
              <th>{t("product_category_id")}</th>
              <th>{t("update")}</th>
              <th>{t("view")}</th>
              <th>{t("delete")}</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((temp) => (
              <tr key={temp.id}>
                <td>{temp.name}</td>
                <td>{temp.price}</td>
                <td>{temp.stock}</td>
                <td>{temp.categoryId}</td>
                {/* UPDATE */}
                <td>
                <Link to={`/product/update/${temp.id}`}>
                  <i 
                  className="fa-solid fa-pen-nib text-primary" 
                  style={{ cursor: "pointer" }}
                  onClick={()=>this.update(temp.id)}>
                  </i>
                </Link>
                </td>
                {/* VIEW */}
                <td>
                  <Link to={`/product/view/${temp.id}`}>
                  <i 
                  className="fa-solid fa-binoculars text-warning" 
                  style={{ cursor: "pointer" }}
                  onClick={()=>this.view(temp.id)}>
                  </i>
                  </Link>
                </td>
                {/* DELETE */}
                <td>
                  <i 
                  className="fa-solid fa-trash text-danger" 
                  style={{ cursor: "pointer" }}
                  onClick={()=>{
                    if(window.confirm(t("product_delete_message1"))){
                      this.delete(temp.id)
                    }else{
                      window.alert(t("product_delete_message2"))
                    }
                  }}>
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default withTranslation()(ProductList);
