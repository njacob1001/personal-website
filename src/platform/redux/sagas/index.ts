import { all, call } from 'redux-saga/effects'
import { routinePromiseWatcherSaga } from 'redux-saga-routines'
import { userSagas } from 'core/store/user/sagas'
import { SagaIterator } from 'redux-saga'

export default function* rootSaga(): SagaIterator {
  try {
    yield all([call(routinePromiseWatcherSaga), call(userSagas)])
  } catch {
    // handle error here
  }
}

export const createSagasTrigger = <T>(actionType: string) => ({
  trigger: actionType,
  run: (payload: T) => ({
    type: actionType,
    payload,
  }),
})
