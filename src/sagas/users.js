// sagas give us the power to controll dispatching the actions
// for example when you delete an user with 2 clicks and the first 
// action is still in progress when the second one is dispatched -> error
// -> takeLatest 

// call allows to call a promise -> waiting for it to return the results
// fork is to create a sub-process of some process and all be run in processes
// any error happens we catch catch in the sub-process
// all sub run paralelly so none will affect others

import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers(){
    try {
        const result = yield call(api.getUsers);
        // console.log('data', result);
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }));
    } catch(e) {

    }
}

// a Generator function has to always yield a value

function* watchGetUsersRequest( ){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}


const usersSagas = [
    fork(watchGetUsersRequest)
];

export default usersSagas;
