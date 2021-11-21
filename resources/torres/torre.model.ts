import { model, Model, models, Schema } from 'mongoose'
import { TTorre } from '../../types/types'

const TorreSchema: Schema = new Schema({
  ciudad: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  latitud: {
    type: String,
    required: true,
  },
  longitud: {
    type: String,
    required: true,
  },
})

const Torre: Model<TTorre> = models.Torre || model('Torre', TorreSchema)

export default Torre
