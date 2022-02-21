import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSagasTrigger } from 'platform/redux/sagas'

export const initialState = {
  uuid: '',
  token: '',
  email: '',
  loading: false,
  error: false,
}

export type InitialState = typeof initialState
type SetUser = PayloadAction<{ token: string; email: string }>

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: SetUser) {
      state.token = action.payload.token
      state.email = action.payload.email
    },
    setLoading(state, action) {
      state.loading = action.payload
    },
    setError(state, action) {
      state.error = action.payload
    },
    logout(state) {
      state.token = ''
      state = initialState
    },
  },
})

export const { setUser, setLoading, setError, logout } = userSlice.actions

export const userLoginSagas = createSagasTrigger<{ email: string; password: string }>('user_login_sagas')

export const userReducer = userSlice.reducer
