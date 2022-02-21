import { FC, useEffect } from 'react'
import { Login as LoginForm } from 'shared/Components/Forms/Login'
import { LoginSchema } from 'core/schemas/user'
import { useSelector } from 'react-redux'
import { userSelector } from 'core/store/user'
import { useNavigate } from 'react-router-dom'
import { Container } from './styled'

const defaultValues = {
  email: 'eve.holt@reqres.in',
  password: 'cityslicka',
}

export const Login: FC = () => {
  const { token } = useSelector(userSelector)
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  }, [token, navigate])

  return (
    <Container>
      <span>Login Screen works!</span>
      <LoginForm defaultValues={defaultValues} validator={LoginSchema} />
    </Container>
  )
}
