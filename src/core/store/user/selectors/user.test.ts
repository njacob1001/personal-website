import { initialState } from '../reducer'
import { userSelector } from './index'

describe('user selector', () => {
  it('user selector should return an empty uuid value', () => {
    const data = userSelector({ user: initialState })
    expect(data.uuid).toEqual('')
  })
})
