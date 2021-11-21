import { TServicio } from '../../types/types'
import { serviceResponse } from './servicios.response'
import Servicio from './servicios.model'
import { crudMessages as msg } from '../../helpers/messages'

export async function create(payload: TServicio) {
  try {
    const servicio = new Servicio(payload)
    try {
      servicio.save()
      return serviceResponse(201, msg.CREATED, true)
    } catch (error) {
      throw new Error(error as string)
    }
  } catch (error) {
    console.log(error)
    return serviceResponse(503, msg.ERROR_CREATING, false)
  }
}

export async function getAll() {
  try {
    const servicios = await Servicio.find()
    if (servicios.length == 0) {
      return serviceResponse(404, msg.NO_CONTENT, false)
    } else {
      return serviceResponse(200, msg.LISTED, true, servicios)
    }
  } catch (error) {
    console.log(error)
    return serviceResponse(503, msg.ERROR, false)
  }
}

export async function getById(id: string) {
  try {
    const servicio = await Servicio.findById(id)
    if (!servicio) {
      return serviceResponse(404, msg.NO_CONTENT, false)
    } else {
      return serviceResponse(200, msg.LISTED, true, servicio)
    }
  } catch (error) {
    console.log(error)
    return serviceResponse(503, msg.ERROR, false)
  }
}

export async function deleteById(id: string) {
  try {
    await Servicio.findByIdAndRemove(id)
    return serviceResponse(200, msg.DELETED, true)
  } catch (error) {
    console.log(error)
    return serviceResponse(503, msg.ERROR, false)
  }
}

export async function enableById(id: string) {
  try {
    await Servicio.findByIdAndUpdate(id, { status: true })
    return serviceResponse(200, msg.CREATED, true)
  } catch (error) {
    console.log(error)
    return serviceResponse(503, msg.ERROR, false)
  }
}

export async function disableById(id: string) {
  try {
    await Servicio.findByIdAndUpdate(id, { status: false })
    return serviceResponse(200, msg.CREATED, true)
  } catch (error) {
    console.log(error)
    return serviceResponse(503, msg.ERROR, false)
  }
}
