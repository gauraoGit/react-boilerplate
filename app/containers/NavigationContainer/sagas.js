import { takeLatest } from 'redux-saga';
import { REQUEST_TOPICS } from './constants';
import { call, put } from 'redux-saga/effects';
import { requestTopicsFailed, requestTopicsSucceeded } from './actions';

export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
    .then((res) => res.json());
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
    // eslint-disable-next-line no-console
    console.log('Topics from server:', topics);
  } catch (e) {
    yield put(requestTopicsFailed('Failed to retrieve topics from server'));
  }
}

// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
];
