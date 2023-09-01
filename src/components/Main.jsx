import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import "./ExternalCss/Main.css"
import OtherLanguageReusability from '../internationalization/OtherLanguageReusability';

class Main extends Component {
    //dispalyName
  static displayName = "Router_Main";

  constructor(props) {
    super(props);
    // state
    this.state = {};
    // bind
  }

  // CDM

  // Function
  render() {
    return (
        <React.Fragment>
            <div className="container-fluid">
            <Link className="btn btn-primary m-5 col-2" to="/product/list">Product List</Link>
            <Link className="btn btn-primary m-5 col-2" to="/product/create">Product Create</Link>
            <Link className="btn btn-primary m-5 col-2" to="/product/view/:id">Product View</Link>
            <Link className="btn btn-primary m-5 col-2" to="/product/update/:id">Product Update</Link>
            </div>
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laudantium fugit dolorem suscipit, unde aperiam soluta, harum nostrum eveniet labore sed beatae et eum at nam corporis qui praesentium. Corporis.
              Odit provident ullam exercitationem nesciunt odio illo harum amet quaerat saepe maiores enim quod obcaecati dicta, sunt adipisci cupiditate illum quia deleniti consequuntur nostrum unde recusandae accusantium impedit. Quisquam, aliquam.
              Totam, quis libero? Amet, omnis, quam inventore harum, cum laborum molestias hic aperiam velit ea porro nostrum. Qui recusandae totam saepe omnis porro dolorem provident, dignissimos ipsum, eum modi nesciunt.
              Doloribus fugiat nihil modi. Natus, minus! Ut obcaecati in autem omnis itaque quis excepturi nesciunt! Iste obcaecati non aut optio officiis. Itaque facilis eos numquam blanditiis quia. Molestias, ipsum error.
              Ex vel tempora tenetur vitae eveniet. Corrupti suscipit velit aliquam, eveniet ex repudiandae dolor praesentium expedita quo sunt amet! A odio illum culpa placeat commodi et explicabo vero nisi! Sed!
            </p>
        </React.Fragment>

    )
  }
}

export default withTranslation()(Main);