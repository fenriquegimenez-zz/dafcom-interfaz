import { NextApiRequest, NextApiResponse } from 'next'
import connectDb from '../../database/database'
import {
  create,
  deleteById,
  getAll,
  getById,
} from '../../resources/empresas/empresas.service'
import {
  errorResponse,
  notAllowedResponse,
  successResponse,
} from '../../resources/empresas/empresas.response'
import {
  createEmpresaDto,
  getByIdDto,
} from '../../resources/empresas/empresas.dto'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query, body } = req
  await connectDb()
  const payload = body
  const { id } = query
  if (method === 'POST') {
    const { error, isValid } = createEmpresaDto(payload)

    console.log('Request validation: ', isValid)

    if (!isValid) {
      res.statusCode = 400
      res.json(errorResponse(error))
    }

    const { msg, success, statusCode } = await create(payload)

    if (!success) {
      res.statusCode = statusCode
      res.json(errorResponse(msg))
    } else {
      res.json(successResponse(msg))
    }
  } else if (method === 'GET') {
    if (!id) {
      const {
        data: allData,
        msg: allMsg,
        statusCode: allStatus,
        success: allSuccess,
      } = await getAll()
      if (!allSuccess) {
        res.statusCode = allStatus
        res.json(errorResponse(allMsg))
      } else {
        res.json(successResponse(allMsg, allData))
      }
    } else {
      const { error, isValid } = getByIdDto(id as string)
      if (!isValid) {
        res.statusCode = 400
        res.json(errorResponse(error))
      }
      const { data, msg, statusCode, success } = await getById(id as string)
      res.statusCode = statusCode
      if (!success) {
        res.json(errorResponse(msg))
      } else {
        res.json(successResponse(msg, data))
      }
    }
  } else if (method === 'DELETE') {
    const { error: deleteError, isValid: deleteValid } = getByIdDto(
      id as string
    )
    if (!deleteValid) {
      res.statusCode = 400
      res.json(errorResponse(deleteError))
    }
    const {
      statusCode: deleteStatus,
      msg: deleteMsg,
      success: deleteSuccess,
    } = await deleteById(id as string)

    res.statusCode = deleteStatus
    if (!deleteSuccess) {
      res.json(errorResponse(deleteMsg))
    } else {
      res.json(successResponse(deleteMsg))
    }
  } else {
    res.statusCode = 405
    res.json(notAllowedResponse())
  }
}
