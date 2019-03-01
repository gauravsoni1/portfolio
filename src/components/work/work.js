import React from 'react';

import style from './work.module.scss';

const Work = () =>{
  return (
    <div className={[style.workContainer,style.greenBlock].join(' ')}>Work</div>
  );
}

export default Work;