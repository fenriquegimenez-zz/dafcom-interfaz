import { TTecnico, TTorre } from '../../types/types'
import Torre from './torre.model'
import { serviceResponse } from './torre.response'
import { crudMessages as msg } from '../../helpers/messages'

export async function create(payload: TTorre) {
  try {
    const torre = new Torre(payload)
    try {
      torre.save()
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
    const torres = await Torre.find()
    if (torres.length == 0) {
      return serviceResponse(404, msg.NO_CONTENT, false)
    } else {
      return serviceResponse(200, msg.LISTED, true, torres)
    }
  } catch (error) {
    console.log(error)
    return serviceResponse(503, msg.ERROR, false)
  }
}

export async function getById(id: string) {
  try {
    const torre = await Torre.findById(id)
    if (!torre) {
      return serviceResponse(404, msg.NO_CONTENT, false)
    } else {
      return serviceResponse(200, msg.LISTED, true, torre)
    }
  } catch (error) {
    console.log(error)
    return serviceResponse(503, msg.ERROR, false)
  }
}

export async function deleteById(id: string) {
  try {
    await Torre.findByIdAndRemove(id)
    return serviceResponse(200, msg.DELETED, true)
  } catch (error) {
    console.log(error)
    return serviceResponse(503, msg.ERROR, false)
  }
}
