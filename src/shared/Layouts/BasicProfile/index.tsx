import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { MainButton } from 'shared/Components/Buttons'
import { Content, Header, Column } from './styled'

interface Props {
  email: string
  onLogout: () => void
}

export const BasicProfile: FC<Props> = ({ email, onLogout }) => {
  const { t } = useTranslation()
  return (
    <Column>
      <Header>{t('hello', { value: email })}</Header>
      <Content>
        <strong>Happy coding</strong>
        <MainButton onClick={onLogout}>Logout</MainButton>
      </Content>
    </Column>
  )
}
