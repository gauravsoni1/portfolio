import React from "react";
import * as imageIcon from "../../assets/images/index";

import style from "./work.module.scss";

const Work = props => {
  return (
    <div className={style.workContainer}>
      <div className={style.heading}>
        <span>{props.title}</span>
      </div>
      <div className={style.description}>
        <span>{props.children}</span>
      </div>
      <div className={style.footer}>
        <div className={style.projectLinks}>
          <a href={props.gitUrl} target="_blank">
            <img src={imageIcon["gitIcon"]} />
          </a>
          View Code
        </div>
        {props.npmUrl ? <div className={style.projectLinks}>
          <a href={props.npmUrl} target="_blank">
            <img src={imageIcon["npmLogo"]} />
          </a>
          NPM package
        </div> : null}
      </div>
    </div>
  );
};

export default Work;
