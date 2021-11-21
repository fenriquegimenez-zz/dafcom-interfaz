import { TServicio, TServicioResponse } from '../../types/types'

export function errorResponse(error: string | undefined) {
  return {
    success: false,
    msg: error,
  }
}

export function successResponse(
  msg: string | undefined,
  data?: TServicio | TServicio[]
) {
  return {
    success: true,
    msg,
    data,
  }
}

export function serviceResponse(
  statusCode: number,
  msg: string,
  success: boolean,
  data?: TServicio | TServicio[]
): TServicioResponse {
  return { statusCode, msg, success, data }
}

export function notAllowedResponse() {
  return {
    success: false,
    msg: 'Method not allowed',
  }
}
