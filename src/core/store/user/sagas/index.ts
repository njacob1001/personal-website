import { SagaIterator } from '@redux-saga/core'
import { all, put, call, takeLatest } from 'redux-saga/effects'
import { login } from 'core/services/login'
import { setError, setLoading, setUser, userLoginSagas } from 'core/store/user/reducer'

function* loginSaga(action: any) {
  yield put(setLoading(true))
  try {
    const { data: user } = yield call(login, action?.payload?.email, action?.payload?.password)
    if (user.token) {
      yield put(
        setUser({
          email: action?.payload?.email,
          token: user.token,
        })
      )
    } else {
      yield put(setError('Login error'))
    }
  } catch (err: any) {
    yield put(setError(err.message))
  } finally {
    yield put(setLoading(false))
  }
}

export function* userSagas(): SagaIterator {
  yield all([takeLatest(userLoginSagas.trigger, loginSaga)])
}
