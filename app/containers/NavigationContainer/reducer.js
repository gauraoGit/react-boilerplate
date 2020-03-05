/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED,
  SELECT_TOPIC,
  TOGGLE_DRAWER,
} from './constants';

const initialState = fromJS({
  topics: [],
  selectedTopic: {},
  isDrawerOpen: false,
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', action.topics);
    case SELECT_TOPIC:
      return state.set('selectedTopic', action.topic).set('isDrawerOpen', false);
    default:
      return state;
  }
}

export default navigationContainerReducer;
