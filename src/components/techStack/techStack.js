import React from "react";
import * as imageIcon from '../../assets/images/index'
 

const TechStack = props => {
  return (
    <div>
      <h2>{props.type}</h2>
      <ul>
        {props.stack.map(item => {
          const angItem = "angularIcon";
          return (
            <li key={item.text}>
              <img src={imageIcon[item.icon]} alt={item.text} />
              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechStack;
