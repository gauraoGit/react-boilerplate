import { call, put } from 'redux-saga/effects';
import { requestLinksFailed, requestLinksSucceeded } from './actions';
import { REQUEST_LINKS } from './constants';
import { takeLatest } from 'redux-saga';

function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
    .then((res) => res.json());
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topicName);
    yield put(requestLinksSucceeded(links));
  } catch (error) {
    yield put(requestLinksFailed('FAILED TO RETRIVE LINKS:'));
  }
}

// Individual exports for testing
export function* fetchLinksSagas() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks);
}

// All sagas to be loaded
export default [
  fetchLinksSagas,
];
