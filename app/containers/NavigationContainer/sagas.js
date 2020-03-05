import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import { REQUEST_TOPICS, SELECT_TOPIC, REQUEST_TOPICS_SUCCEEDED } from './constants';
import { call, put, select } from 'redux-saga/effects';
import { requestTopicsFailed, requestTopicsSucceeded } from './actions';
import selectNavigationContainer from './selectors';

export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
    .then((res) => res.json());
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
  } catch (e) {
    yield put(requestTopicsFailed('Failed to retrieve topics from server'));
  }
}

function* pushTopics(action) {
  yield put(push(`/topics/${action.topic.name}`));
}

function* selectDefaultTopic() {
  const state = yield select(selectNavigationContainer());
  if (Object.entries(state.selectedTopic).length === 0 && state.selectedTopic.constructor === Object) {
    yield put(push(`/topics/${state.topics[0].name}`));
  }
}

// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

export function* selectDefaultTopicSaga() {
  yield* takeLatest(REQUEST_TOPICS_SUCCEEDED, selectDefaultTopic);
}

// Individual exports for testing
export function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopics);
}


// All sagas to be loaded
export default [
  fetchTopicsSaga,
  selectTopicSaga,
  selectDefaultTopicSaga,
];
