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

export default LinkList;
