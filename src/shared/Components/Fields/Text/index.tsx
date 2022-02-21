import styled from 'styled-components'

export const TextInput = styled.input`
  padding: 1rem;
  border: solid 1px #fff;
  border-color: ${({ theme }) => theme.colors.main};
  color: #000;
`
