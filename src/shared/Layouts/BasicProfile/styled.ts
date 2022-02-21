import styled from 'styled-components'

export const Header = styled.header`
  padding: 1rem;
  background-color: #333333;
  align-self: stretch;
  color: #fff;
`

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & strong {
    margin: 1rem;
  }
`
export const Column = styled(Content)`
  height: 100vh;
`
