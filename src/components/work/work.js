import React from "react";
import * as imageIcon from "../../assets/images/index";

import style from "./work.module.scss";

const Work = (props) => {
  return (
    <div className={style.workContainer}>
      <div className={style.heading}>
        <span>{props.title}</span>
      </div>
      <div className={style.description}>
        <span>
          {props.children}
        </span>
      </div>
      <div className={style.footer}>
        <a href={props.gitUrl} target="_blank">
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
