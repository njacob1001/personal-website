import type { ServiceResponse } from 'shared/helpers/http'
import { http } from 'shared/helpers/http'

export const login = async (email: string, password: string): Promise<ServiceResponse> => {
  try {
    const { data } = await http('api/login', 'POST', {
      email,
      password,
    })
    return { ok: true, data }
  } catch (error: any) {
    return { ok: false, message: error.message }
  }
}
