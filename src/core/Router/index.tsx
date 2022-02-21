import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MainRouter } from './Main'

export const Router: FC = () => (
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
)
