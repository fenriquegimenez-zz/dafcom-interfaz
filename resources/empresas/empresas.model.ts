import { model, Model, models, Schema } from 'mongoose'
import { TEmpresa } from '../../types/types'

const EmpresaSchema: Schema = new Schema({
  razonSocial: {
    type: String,
    required: true,
  },
  ruc: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
})

const Empresa: Model<TEmpresa> =
  models.Empresa || model('Empresa', EmpresaSchema)

export default Empresa
