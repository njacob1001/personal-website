import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from 'core/Pages/Home'
import { Login } from 'core/Pages/Login'
import { Profile } from 'core/Pages/Profile'

export const MainRouter: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="profile" element={<Profile />} />
  </Routes>
)
