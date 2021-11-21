import { TTecnico, TTecnicoResponse } from '../../types/types'

export function errorResponse(error: string | undefined) {
  return {
    success: false,
    msg: error,
  }
}

export function successResponse(
  msg: string | undefined,
  data?: TTecnico | TTecnico[]
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
  data?: TTecnico | TTecnico[]
): TTecnicoResponse {
  return { statusCode, msg, success, data }
}

export function notAllowedResponse() {
  return {
    success: false,
    msg: 'Method not allowed',
  }
}
