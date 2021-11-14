export interface TTitle {
  name: string
}

export interface TCargarButton {
  recurso: string
}

export interface TTecnico {
  documento: number
  nombre: string
  apellido: string
}

export interface TTorre {
  ciudad: string
  direccion: string
  latitud: string
  longitud: string
  id: string
}

export interface TServicio {
  id: string
  torre: string
  descripcion: string
  proveedor: string
  tecnico: string
  status: boolean
}

export interface TecnicosProps {
  tecnicos: TTecnico[]
}

export interface TEmpresa {
  ruc: string
  razonSocial: string
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
