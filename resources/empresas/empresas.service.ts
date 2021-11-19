import { TEmpresa, TEmpresaResponse } from '../../types/types'
import Empresa from '../../resources/empresas/empresas.model'
import { serviceResponse, successResponse } from './empresas.response'
import { CallbackError } from 'mongoose'

export async function create(payload: TEmpresa) {
  try {
    const empresa = new Empresa(payload)
    const alreadyExists = await Empresa.findOne({ ruc: payload.ruc })
    if (!alreadyExists) {
      try {
        empresa.save()
        return serviceResponse(201, 'Resource created succesfully', true)
      } catch (error) {
        throw new Error(error as string)
      }
    } else {
      return serviceResponse(409, `The resorce already exists`, false)
    }
  } catch (error) {
    console.log(error)
    return serviceResponse(503, `Error while creating resorce`, false)
  }
}

export async function getAll() {
  try {
    const empresas = await Empresa.find()
    if (empresas.length == 0) {
      return serviceResponse(404, 'No content found', false)
    } else {
      return serviceResponse(200, 'Listed succesfully', true, empresas)
    }
  } catch (error) {
    console.log(error)
    return serviceResponse(503, 'There was an error', false)
  }
}

export async function getById(id: string) {
  try {
    const empresa = await Empresa.findById(id)
    if (!empresa) {
      return serviceResponse(404, 'No content found', false)
    } else {
      return serviceResponse(200, 'Listed succesfully', true, empresa)
    }
  } catch (error) {
    console.log(error)
    return serviceResponse(503, 'There was an error', false)
  }
}

export async function deleteById(id: string) {
  try {
    const deleted = await Empresa.findByIdAndRemove(id)
    return serviceResponse(200, 'Deleted succesfully', true)
  } catch (error) {
    console.log(error)
    return serviceResponse(503, 'There was an error', false)
  }
}
