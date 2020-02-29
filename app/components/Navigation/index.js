/**
*
* Navigation
*
*/

import React from 'react';

import styles from './styles.css';

function Navigation({ topics, selectTopic }) {
  const topicNodes = topics.map(t => (
    <div
      key={t.name}
      onClick={() => selectTopic(t)}
    >
      {t.name}
    </div>
  ));
  return (
    <div className={styles.navigation}>
      {topicNodes}
    </div>
  );
}

Navigation.propTypes = {
  topics: React.Proptypes.arrayOf(
    React.Proptypes.shape({
      name: React.Proptypes.string.isRequired,
      description: React.Proptypes.string.isRequired,
    })
  ).isRequired,
  selectTopic: React.Proptypes.func.isRequired,
};

export default Navigation;
