import Joi from 'joi'
import { TTecnico } from '../../types/types'

export function createTecnicoDto(payload: TTecnico) {
  const schema = Joi.object({
    documento: Joi.number().required(),
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    empresa: Joi.string().required(),
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
