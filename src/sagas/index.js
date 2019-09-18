import UsersSagas from './users';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        ...UsersSagas
    ])
}

// creates a new array from the UsersSagas array

// allow all the forked processes to be fired and run in parallel 