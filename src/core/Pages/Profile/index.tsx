import { FC, useEffect } from 'react'
import { logout } from 'core/store/user'
import { useDispatch, useSelector } from 'react-redux'
import { BasicProfile } from 'shared/Layouts/BasicProfile'
import { userSelector } from 'core/store/user'
import { useNavigate } from 'react-router-dom'

export const Profile: FC = () => {
  const { email, token } = useSelector(userSelector)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token, navigate])

  const handleLogout = (): void => {
    dispatch(logout())
  }

  return <BasicProfile email={email} onLogout={handleLogout} />
}
