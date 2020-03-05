/**
*
* Navigation
*
*/

import React from 'react';

import styles from './styles.css';
import AppBar from '../AppBar';
import Drawer from '../Drawer';

function Navigation({ topics, selectTopic, toggleDrawer, isDrawerOpen }) {
  return (
    <div className={styles.navigation}>
      <AppBar toggleDrawer={toggleDrawer} />
      <Drawer
        items={topics}
        selectItem={selectTopic}
        itemLabelAttr="name"
        itemKeyAttr="name"
        isDrawerOpen={isDrawerOpen}
      />
    </div>
  );
}

// Navigation.propTypes = {
//   toggleDrawer: React.Proptypes.func.isRequired,
//   topics: React.Proptypes.arrayOf(
//     React.Proptypes.shape({
//       name: React.Proptypes.string.isRequired,
//       description: React.Proptypes.string.isRequired,
//     })
//   ).isRequired,
//   selectTopic: React.Proptypes.func.isRequired,
//   isDrawerOpen: React.Proptypes.boolean.isRequired,
// };

export default Navigation;
