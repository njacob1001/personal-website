/**
 * This file is generated by plopfile
 * avoid modifications and DO NOT remove the comments
 * comments above is used by plopfile to localize the line which  id going to generate the code
 */

// append_reducer_import
import { combineReducers } from '@reduxjs/toolkit'
import { userReducer as user } from 'core/store/user'

export const rootReducer = combineReducers({
  // append_reducer
  user,
})