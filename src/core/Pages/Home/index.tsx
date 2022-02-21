import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Container } from './styled'

export const Home: FC = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <span>Jacob Gonzalez</span>
      <Link to="/login">{t('login')}</Link>
    </Container>
  )
}
