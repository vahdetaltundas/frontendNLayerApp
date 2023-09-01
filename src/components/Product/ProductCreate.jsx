import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import ProductApi from "../../services/ProductApi";
import ResuabilityProductInput from "./ResuabilityProductInput";

class ProductCreate extends Component {
  // Componentteki isim
  static displayName = "Product_Create";

  // Constructor
  constructor(props) {
    super(props);
    // STATE
    this.state = {
      name: null,
      stock: null,
      price: null,
      categoryId: null,
      isRead:false,// Sözleşme kuralları
      spinnerData:false,// Spinner
      multipleRequest:false,
      productDto: {},
      errors:{},// Back endden gelen hata verileri almak
    };
    // BIND
    this.onChangeIsRead=this.onChangeIsRead.bind(this);
    this.onChangeInputValueString=this.onChangeInputValueString.bind(this);
    this.onChangeInputValueNumber=this.onChangeInputValueNumber.bind(this);
    this.createSubmit=this.createSubmit.bind(this);
  }

  // CDM

  // FUNCTION
  onChangeIsRead=(event)=>{
    this.setState({
      isRead:event.target.checked,
    })
  }

  onChangeInputValueString=(event)=>{
    // 1.Yol
    // const name=event.target.name;
    // const value=event.target.value;
    
    // 2.Yol
    const {name,value}=event.target
    // STATE 
    this.setState({
      [name]:value,
    })
  }
  onChangeInputValueNumber=(event)=>{
    const {name,value}=event.target;
    // STATE 
    this.setState({
      [name]:Number(value),
    })
  }

  createSubmit= async (event)=>{
    // Browser sen bir şey yapma
    event.preventDefault();

    const {name,stock,price,categoryId}=this.state;
    const productDto={
      name,stock,price,categoryId
    }

    // 1.YOL
    // ProductApi.Save(productDto).
    // then((response)=>{
    //   if(response.status==200){
    //     alert("Başarıyla eklendi");
    //   }
    // }).
    // catch((err)=>{
    //   console.error(err);
    // });

    // 2.YOL async await
    try {
      // Spinner
      this.setState({
        spinnerData:true,
        multipleRequest:true
      });
      // Create
      const response=await ProductApi.Save(productDto);
        if(response.status==200){
          this.setState({
            spinnerData:false,
            multipleRequest:false
          });
          alert("Başarıyla eklendi");
        }
    } catch (error) {
      
      console.error(error);
      this.setState({
        spinnerData:true,
        multipleRequest:false
      });
      //Backendden gelen hata varsa yakala
      if(error.response.data.errors){
        this.setState({
          errors:error.response.data.errors
        })
      }
    }

  }

  // RENDER
  render() {
    const { t } = this.props;
    const {isRead,multipleRequest ,errors}=this.state;
    // RETURN
    return (
      <React.Fragment>
        <h1 className="text-center display-4 text-uppercase">
          {t("product_create")}
        </h1>
        <form action="">
          {/* HEADER */}
          {/* <div className="form-group mb-4">
            <span className="form-label mb-2">{t("product_name")}</span>
            <input
              type="text"
              className="form-control mb-4"
              id="name"
              name="name"
              placeholder={t("product_name")}
              required={true}
              autoFocus={true}
              onChange={this.onChangeInputValueString}
            />
          </div> */}
          <ResuabilityProductInput 
          type="text" 
          className="form-control mb-4" 
          id="name" 
          placeholder={t("product_name")} 
          required={true}
          autoFocus={true}
          onChange={this.onChangeInputValueString}/>

          {/* <div className="form-group mb-4">
            <span className="form-label">{t("product_stock")}</span>
            <input
              type="number"
              className="form-control"
              id="stock"
              name="stock"
              placeholder={t("product_stock")}
              required={true}
              autoFocus={false}
              onChange={this.onChangeInputValueNumber}
            />
          </div> */}
          <ResuabilityProductInput 
          type="number" 
          className="form-control mb-4" 
          id="stock" 
          placeholder={t("product_stock")} 
          required={true}
          autoFocus={false}
          onChange={this.onChangeInputValueNumber}/>
          
          <div className="form-group mb-4">
            <span className="form-label">{t("product_price")}</span>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              placeholder={t("product_price")}
              required={true}
              autoFocus={false}
              onChange={this.onChangeInputValueNumber}
            />
          </div>
          <div className="form-group mb-4">
            <span className="form-label">{t("product_category_id")}</span>
            <input
              type="number"
              className="form-control"
              id="categoryId"
              name="categoryId"
              placeholder={t("product_category_id")}
              required={true}
              autoFocus={false}
              onChange={this.onChangeInputValueNumber}
            />
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="isReadId"
              id="isReadId"
              value=""
              onChange={this.onChangeIsRead}
            />
            <label className="form-check-label" htmlFor="">
              {t("contract")}
            </label>
          </div>
          {/* SUBMİT */}
          <button className="btn btn-primary me-2" disabled={(!isRead)||(multipleRequest)} onClick={this.createSubmit}>{(this.state.spinnerData)&&<span className="spinner-border text-warning"></span>} {t("submit")}</button>
          {/* RESET */}
          <button className="btn btn-danger" type="reset">{t("reset")}</button>
          
          <br />
          <br />
          <br />
          <br />
        </form>
      </React.Fragment>
    );
  }
}
export default withTranslation()(ProductCreate);
