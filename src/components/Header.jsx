import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import OtherLanguageReusability from "../internationalization/OtherLanguageReusability";
import { Link } from "react-router-dom";

class Header extends Component {
  //dispalyName
  static displayName = "Router_Header";

  constructor(props) {
    super(props);
    // state
    this.state = {};
    // bind
  }

  // CDM

  // Function
  render() {
    const {logo,t}=this.props;
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            {/* <a className="navbar-brand" href="#">
            <i className={logo}></i>
            </a> */}
            <Link to="/" className="navbar-brand"><i className={logo}></i></Link>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  {/* <a className="nav-link active" href="#" aria-current="page">
                    {t('homepage')} <span className="visually-hidden">(current)</span>
                  </a> */}
                  <Link to="/" className="nav-link active" aria-current="page">
                    {t('homepage')} <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  {t('about')}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  {t('blog')}
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="dropdownId"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        {t('member_process')}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                        <a className="dropdown-item" href="#">
                            {t('login')}
                        </a>
                        <a className="dropdown-item" href="#">
                            {t('register')}
                        </a>
                    </div>
                </li>
            </ul>
              <OtherLanguageReusability/>
              <form className="d-flex my-2 my-lg-0">
                <input
                  className="form-control me-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default withTranslation()(Header);
