import { Document } from 'mongoose'

export interface TTitle {
  name: string
}

export interface TCargarButton {
  recurso: string
  endpoint: string
  body: Object
}

export interface TTecnico extends Document {
  documento: number
  nombre: string
  apellido: string
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
  proveedor: string
  tecnico: string
  status: boolean
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
