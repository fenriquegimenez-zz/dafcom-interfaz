import Joi from 'joi'

export function getByIdDto(id: string) {
  const schema = Joi.string().required()
  const { error } = schema.validate(id)
  return {
    isValid: error == null,
    error: error?.message,
  }
}
