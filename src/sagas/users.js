import {takeEvery, call, fork, put} from 'redux-saga/effects';
import {Types} from '../actions/types';
import * as api from  '../api/users';

// generator function
// worker saga 
function * getUsers() {
try {
    // wait for the result and execute
    const result = yield call(api.getUsers);
    yield put({type:Types.GET_USERS_SUCCESS, users:result.data});

} catch(e) {

}
}
// generator function 
// watcher saga 
function* watchGetUsersRequest() {
    yield takeEvery(Types.GET_USERS_REQUEST, getUsers)
}

  const userSagas = [
    fork(watchGetUsersRequest)
];

export default userSagas;

