import { createSelector } from '@reduxjs/toolkit'

// TODO: import Store type and add reducer type in Store interface
const getUser = (state: any) => state.user

export const userSelector = createSelector(getUser, (user) => user)
