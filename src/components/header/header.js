import React, { Component } from "react";
import classes from "./header.module.scss";

import menuIcon from "../../assets/images/menu.png";
import HeaderNavButtons from './headerNavButtons';

class Header extends Component {
  state = {
    isResponsive: null
  };

  toggleMenu = () => {
    this.setState(prev => {
      if (prev.isResponsive === null)
        return { isResponsive: classes.responsive };
      else return { isResponsive: null };
    });
  };

  render() {
    return (
      <div className={classes.header}>
        <div className={classes.headerTitleRow}>
          <p> Gaurav Soni</p>
          <img onClick={this.toggleMenu} src={menuIcon} alt="Menu" />
        </div>
        <div className={[classes.headerButtons, this.state.isResponsive].join(" ")}>
          <HeaderNavButtons />
        </div>
      </div>
    );
  }
}

export default Header;
