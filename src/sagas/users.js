// sagas give us the power to controll dispatching the actions
// for example when you delete an user with 2 clicks and the first 
// action is still in progress when the second one is dispatched -> error
// -> takeLatest 

// users can also edit the form and send again, and last form will be processed

// call allows to call a promise -> waiting for it to return the results
// fork is to create a sub-process of some process and all be run in processes
// any error happens we catch catch in the sub-process
// all sub run paralelly so none will affect others

import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
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

function* createUser(action){
    try {
        console.log(action);
        console.log(action.payload.firstName);
        yield call(api.createUser, {firstName: action.payload.firstName, lastName: action.payload.lastName });
        yield call(getUsers)
    } catch (error) {
        
    }
}

function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest)
];

export default usersSagas;
