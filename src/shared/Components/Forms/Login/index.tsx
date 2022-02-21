import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { userLoginSagas } from 'core/store/user'
import { useForm } from 'react-hook-form'
import { MainButton } from 'shared/Components/Buttons'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextInput } from 'shared/Components/Fields/Text'
import { Field as StyledField, Margin } from './styled'

interface Props {
  defaultValues?: any
  validator?: any
}

export const Login: FC<Props> = ({ defaultValues, validator }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: validator && yupResolver(validator) })

  const dispatch = useDispatch()

  const onSubmit = (values: any): void => {
    dispatch(userLoginSagas.run({ email: values.email, password: values.password }))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledField>
        <Margin>
          <TextInput {...register('email')} />
          {errors.email && <div>{errors.email.message}</div>}
        </Margin>
        <Margin>
          <TextInput {...register('password')} type="password" />
          {errors.password && <div>{errors.password}</div>}
        </Margin>
        <Margin>
          <MainButton type="submit">Submit</MainButton>
        </Margin>
      </StyledField>
    </form>
  )
}
