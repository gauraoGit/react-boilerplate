import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { requestLinksFailed, requestLinksSucceeded } from './actions';

function fetchLinksFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`)
    .then((res) => res.json());
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    yield put(requestLinksSucceeded(links));
  } catch (error) {
    yield put(requestLinksFailed('FAILED TO RETRIVE LINKS:'));
  }
}

// Individual exports for testing
export function* fetchLinksSagas() {
  yield* takeLatest(SELECT_TOPIC, fetchLinks);
}

// All sagas to be loaded
export default [
  fetchLinksSagas,
];
