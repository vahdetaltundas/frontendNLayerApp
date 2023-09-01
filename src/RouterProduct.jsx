// rcc
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

// ROUTER
import { Navigate, Route, Routes } from 'react-router-dom';

// HEADER , FOOTER
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Component CRUD
import ProductList from './components/Product/ProductList';
import ProductCreate from './components/Product/ProductCreate';
import ProductView from './components/Product/ProductView';
import ProductUpdate from './components/Product/ProductUpdate';

class RouterProduct extends Component {
    
    //dispalyName
    static displayName="Router_Product";

    constructor(props){
        super(props);
        // state
        this.state={};
        // bind
    }

    // CDM

    // Function
    
  render() {
    return (
      <React.Fragment>
        <Header logo="fa-solid fa-v"/>
        
        <div className="container">
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/product/list" element={<ProductList/>} />
            <Route path="/product/create" element={<ProductCreate/>} />
            <Route path="/product/view/:id" element={<ProductView/>} />
            <Route path="/product/update/:id" element={<ProductUpdate/>} />
            {/* Yanlış girilen uzantıları ana dizine yönlendirir */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        <Footer copy="&copy; 2021 - "/>
      </React.Fragment>
    )
  }
}

// Class adı aşağıda gösterme
// export default RouterProduct ();

// Higher Order Component
export default withTranslation()(RouterProduct);