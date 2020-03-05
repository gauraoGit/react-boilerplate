/**
*
* AppBar
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './styles.css';

function AppBar({ toggleDrawer }) {
  return (
    <div className={styles.appBar}>
      <div className={styles.iconButton}>
        <FontAwesome
          className={styles.icon}
          name="bars"
          onClick={toggleDrawer}
        />
      </div>
      <div className={styles.heading}>
        Coded Daily
      </div>
      <div className={styles.linkContainer}>
        log in
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
};

export default AppBar;
