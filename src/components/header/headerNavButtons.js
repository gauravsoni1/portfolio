import React from "react";
import * as imageIcon from "../../assets/images/index";
import cv from "../../assets/gaurav_cv.pdf";

const HeaderNavButtons = () => {
  return (
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
        <a
          href="https://www.linkedin.com/in/gaurav-soni-1a916a53/"
          target="_blank"
        >
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
  );
};

export default HeaderNavButtons;
