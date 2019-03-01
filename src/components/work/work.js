import React from "react";
import * as imageIcon from "../../assets/images/index";

import style from "./work.module.scss";

const Work = () => {
  return (
    <div className={style.workContainer}>
      <div className={style.heading}>
        <span>My Profile Website</span>
      </div>
      <div className={style.description}>
        <span>
          Website to display all professional activities related to me on a single page.Learn about how SVG works, and creating custom SVG shapes.
          Website created in ReactJS.
        </span>
      </div>
      <div className={style.footer}>
        <a href="https://github.com/gauravsoni1/portfolio" target="_blank">
          <img
            src={imageIcon["gitIcon"]}
          />
        </a>
        View Code
      </div>
    </div>
  );
};

export default Work;
