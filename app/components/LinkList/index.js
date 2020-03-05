/**
*
* LinkList
*
*/

import React from 'react';
import Link from '../Link';

import styles from './styles.css';

function LinkList({ links, topicName }) {
  const linkNodes = links.map(l => (
    <Link
      key={l.id}
      link={l}
    />
  ));
  return (
    <div className={styles.linkList}>
      <div>
        <h1>
          {topicName}
        </h1>
      </div>
      {linkNodes}
    </div>
  );
}

// LinkList.propTypes = {
// topicName:React.Proptypes.string.isRequired,
//   links: React.PropTypes.arrayOf(
//     React.Proptypes.shape({
//       id: React.Proptypes.string.isRequired,
//       url: React.Proptypes.string.isRequired,
//       description: React.Proptypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default LinkList;
