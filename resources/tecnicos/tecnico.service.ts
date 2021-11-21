import { TTecnico } from '../../types/types'
import Tecnico from './tecnico.model'
import { serviceResponse } from './tecnico.response'
import { crudMessages as msg } from '../../helpers/messages'

export async function create(payload: TTecnico) {
  try {
    const tecnico = new Tecnico(payload)
    const alreadyExists = await Tecnico.findOne({
      documento: payload.documento,
    })
    if (!alreadyExists) {
      try {
        tecnico.save()
        return serviceResponse(201, msg.CREATED, true)
      } catch (error) {
        throw new Error(error as string)
      }
    } else {
      return serviceResponse(409, msg.ALREADY_EXISTS, false)
    }
  } catch (error) {
    console.log(error)
    return serviceResponse(503, msg.ERROR_CREATING, false)
  }
}

export async function getAll() {
  try {
    const tecnicos = await Tecnico.find()
    if (tecnicos.length == 0) {
      return serviceResponse(404, msg.NO_CONTENT, false)
    } else {
      return serviceResponse(200, msg.LISTED, true, tecnicos)
    }
  } catch (error) {
    console.log(error)
    return serviceResponse(503, msg.ERROR, false)
  }
}

export async function getById(id: string) {
  try {
    const tecnico = await Tecnico.findById(id)
    if (!tecnico) {
      return serviceResponse(404, msg.NO_CONTENT, false)
    } else {
      return serviceResponse(200, msg.LISTED, true, tecnico)
    }
  } catch (error) {
    console.log(error)
    return serviceResponse(503, msg.ERROR, false)
  }
}

export async function deleteById(id: string) {
  try {
    await Tecnico.findByIdAndRemove(id)
    return serviceResponse(200, msg.DELETED, true)
  } catch (error) {
    console.log(error)
    return serviceResponse(503, msg.ERROR, false)
  }
}
