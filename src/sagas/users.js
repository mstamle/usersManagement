// sagas give us the power to controll dispatching the actions
// for example when you delete an user with 2 clicks and the first 
// action is still in progress when the second one is dispatched -> error
// -> takeLatest 

import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/users';

function* getUsers(){
    try{

    }catch(e){

    }
}

// a Generator function has to always yield a value

function* watchGetUsersRequest( ){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}
