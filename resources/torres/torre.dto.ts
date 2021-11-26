import Joi from 'joi'
import { TTorre } from '../../types/types'

export function createTorreDto(payload: TTorre) {
  const schema = Joi.object({
    ciudad: Joi.string().required(),
  })

  if (!payload) {
    return {
      isValid: false,
      error: 'Payload must be sent in the request body',
    }
  }
  const { error } = schema.validate(payload)

  return {
    isValid: error == null,
    error: error?.message,
  }
}
