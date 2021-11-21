import { model, Model, models, Schema } from 'mongoose'
import { TTecnico } from '../../types/types'

const TecnicoSchema: Schema = new Schema({
  documento: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  empresa: {
    type: String,
    required: true,
  },
})

const Tecnico: Model<TTecnico> =
  models.Tecnico || model('Tecnico', TecnicoSchema)

export default Tecnico
