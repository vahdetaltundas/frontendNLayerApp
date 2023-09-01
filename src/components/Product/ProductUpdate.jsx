import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import ProductApi from "../../services/ProductApi";
import ResuabilityProductInput from "./ResuabilityProductInput";

class ProductUpdate extends Component {
  static displayName = "Product_Update";

  constructor(props) {
    super(props);

    this.state = {
      id: localStorage.getItem("product_data_id"),
      name: null,
      stock: null,
      price: null,
      categoryId: null,
      responseDto: {},
      errors: null,
      multipleRequest:false
    };
    // BIND
  }

  // CDN
  componentDidMount = () => {
    ProductApi.GetById(this.state.id)
      .then((response) => {
        this.setState({
          responseDto: response.data.data,
        });
      })
      .catch((err) => {
        
      });
  };

  // Function
  onChangeInputValueString = (event) => {
    // 1.Yol
    // const name=event.target.name;
    // const value=event.target.value;

    // 2.Yol
    const { name, value } = event.target;
    // STATE
    this.setState({
      [name]: value,
    });
  };
  onChangeInputValueNumber = (event) => {
    const { name, value } = event.target;
    // STATE
    this.setState({
      [name]: Number(value),
    });
  };

  updateSubmit = async (event) => {
    event.preventDefault();

    const { id, name, stock, price, categoryId } = this.state;
    const productDto = {
      id,
      name,
      stock,
      price,
      categoryId,
    };

    try {
      this.setState({
        multipleRequest:true
      });
      // Create
      const response = await ProductApi.Update(productDto);
      if (response.status == 204) {
        alert("Başarıyla güncellendi");
        this.setState({
          multipleRequest:false
        });
        
      }
    } catch (error) {
      console.error(error);
      if (error.response.data.errors) {
        this.setState({
          errors: error.response.data.errors,
          multipleRequest:false
        });
      }
    }
  };

  render() {
    const { t } = this.props;
    const{multipleRequest}=this.state;
    const { name, price, stock, categoryId } = this.state.responseDto;
    return (
      <React.Fragment>
        <h1 className="text-center display-4 text-uppercase">
          {t("product_update")}
        </h1>
        <form action="" method="post">
          {/* <div className="form-group mb-4">
            <label> {t("product_name")} </label>
            <input
              type="text"
              className="form-control mb-4"
              id="name"
              name="name"
              placeholder={name}
              required={true}
              autoFocus={true}
              onChange={this.onChangeInputValueString}
            />
          </div> */}
          <ResuabilityProductInput 
          type="text" 
          classNameInput="form-control mb-4" 
          id="name" 
          placeholder={name} 
          label={t("product_name")} 
          required={true}
          autoFocus={true}
          onChange={this.onChangeInputValueString}
          />
          <ResuabilityProductInput 
          type="number" 
          classNameInput="form-control mb-4" 
          id="stock" 
          placeholder={stock} 
          label={t("product_stock")} 
          required={true}
          autoFocus={false}
          onChange={this.onChangeInputValueNumber}
          />
          <ResuabilityProductInput 
          type="number" 
          classNameInput="form-control mb-4" 
          id="price" 
          placeholder={price} 
          label={t("product_price")} 
          required={true}
          autoFocus={false}
          onChange={this.onChangeInputValueNumber}
          />
          <ResuabilityProductInput 
          type="number" 
          classNameInput="form-control mb-4" 
          id="categoryId" 
          placeholder={categoryId}
          label={t("product_category_id")}  
          required={true}
          autoFocus={false}
          onChange={this.onChangeInputValueNumber}
          />
          {/* SUBMİT */}
          <button 
          className="btn btn-primary me-2" 
          onClick={this.updateSubmit}
          disabled={(multipleRequest)}
          >
            {t("submit")}
          </button>
          
        </form>
      </React.Fragment>
    );
  }
}
export default withTranslation()(ProductUpdate);
