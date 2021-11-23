import { model, Model, models, Schema } from 'mongoose'
import { TServicio } from '../../types/types'

const ServicioSchema: Schema = new Schema({
  torre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  empresa: {
    type: String,
    required: true,
  },
  tecnico: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
    required: true,
  },
  rfid: {
    type: String,
    required: true,
  },
})

const Servicio: Model<TServicio> =
  models.Servicio || model('Servicio', ServicioSchema)

export default Servicio
