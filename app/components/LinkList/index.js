/**
*
* LinkList
*
*/

import React from 'react';


import styles from './styles.css';

function LinkList({ links }) {
  const linkNodes = links.map(l => (
    <div
      key={l.id}
    >
      {l.url} - {l.description}
    </div>
  ));
  return (
    <div className={styles.linkList}>
      {linkNodes}
    </div>
  );
}

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(
    React.Proptypes.shape({
      id: React.Proptypes.string.isRequired,
      url: React.Proptypes.string.isRequired,
      description: React.Proptypes.string.isRequired,
    })
  ).isRequired,
};

export default LinkList;
