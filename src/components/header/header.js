import React from "react";
import classes from "./header.module.scss";

import * as imageIcon from "../../assets/images/index";
import cv from '../../assets/gaurav_cv.pdf';

const Header = () => {
  return (
    <div className={classes.header}>
      <span> Gaurav Soni</span>
      <div className={classes.aboutMeBody}>
        <ul>
          <li>
            <a href="https://github.com/gauravsoni1" target="_blank">
              <img
                src={imageIcon["gitIcon"]}
                href="https://github.com/gauravsoni1"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/gauravs1990" target="_blank">
              <img src={imageIcon["facebookIcon"]} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gaurav-soni-1a916a53/" target="_blank">
              <img src={imageIcon["linkedinIcon"]} />
            </a>
          </li>
          <li>
            <a href="mailto:gaurav@allcadservices.com" target="_top">
              <img src={imageIcon["emailIcon"]} />
            </a>
          </li>
          <li>
            <a href={cv} target="_blank">
              <img src={imageIcon["cvIcon"]} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
