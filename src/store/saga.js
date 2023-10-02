// yield работает как await, он останавливает функцию.
// При след.вызове ф-ции произойдет только вывод следующего yield

// watcher - следит за тем, что ему укажем
// takeEvery будет вызывать каждый раз функцию worker-a,
// когда будет происходить определенный action

// worker работает с побочными действиями

// import {takeEvery} from 'redux-saga/effects';

// function* workerSaga(action) {
//   yield console.log('работает');
// }

// export function* watchSaga() {
//   yield takeEvery('SUBMIT', workerSaga);
// }

// export default function* rootSaga() {
//   yield watchSaga();
// }

import {watchSearch} from './search/searchSaga';

export default function* rootSaga() {
  yield watchSearch();
}
