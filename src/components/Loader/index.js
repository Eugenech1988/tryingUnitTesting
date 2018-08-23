import React from 'react';
import loaderIcon from 'assets/icons/ReactHeart.svg';

import styles from 'styles/modules/loader.module.scss';

const Loader = props => {
  return (
    <div className={styles.wrapper}>
      <img src={loaderIcon} alt='' className={styles.image}/>
    </div>
  );
};

export default Loader;
