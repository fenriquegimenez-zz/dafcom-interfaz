import { Document } from 'mongoose'

export interface TTitle {
  name: string
}

export interface TCargarButton {
  recurso: string
  endpoint: string
  body: Object
  disabled: boolean
}

export interface TTecnico extends Document {
  documento: number
  nombre: string
  apellido: string
  empresa: string
}

export interface TTorre extends Document {
  ciudad: string
  direccion: string
  latitud: string
  longitud: string
}

export interface TServicio extends Document {
  torre: string
  descripcion: string
  empresa: string
  tecnico: string
  status: boolean
  rfid: string
}

export interface TecnicosProps {
  tecnicos: TTecnico[]
}

export interface TEmpresa extends Document {
  ruc: string
  razonSocial: string
  sector: string
}

export interface EmpresasProps {
  empresas: TEmpresa[]
}

export interface ServiciosProps {
  servicios: TServicio[]
}

export interface TorresProps {
  torres: TTorre[]
}

export interface ServiciosFormProps {
  servicios?: TServicio[]
  empresas: TEmpresa[]
  tecnicos: TTecnico[]
  torres: TTorre[]
}

export interface LayoutChild {
  children: React.ReactNode
}

export interface LandingProps {
  auth: boolean
}

export interface TEmpresaResponse {
  data?: TEmpresa[] | TEmpresa | undefined
  msg: string
  statusCode: number
  success: boolean
}

export interface TTecnicoResponse {
  data?: TTecnico[] | TTecnico | undefined
  msg: string
  statusCode: number
  success: boolean
}

export interface TTorreResponse {
  data?: TTorre[] | TTorre | undefined
  msg: string
  statusCode: number
  success: boolean
}

export interface TServicioResponse {
  data?: TServicio[] | TServicio | undefined
  msg: string
  statusCode: number
  success: boolean
}
