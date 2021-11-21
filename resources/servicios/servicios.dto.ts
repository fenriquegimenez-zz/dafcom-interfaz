import Joi from 'joi'
import { TServicio } from '../../types/types'

export function createServicioDto(payload: TServicio) {
  const schema = Joi.object({
    torre: Joi.string().required(),
    descripcion: Joi.string().required(),
    empresa: Joi.string().required(),
    tecnico: Joi.string().required(),
    rfid: Joi.string().required(),
    status: Joi.boolean(),
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
