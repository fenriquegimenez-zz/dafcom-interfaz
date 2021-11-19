import { TEmpresaResponse } from '../types/types'

interface Props {
  apiResponse: {
    success: boolean
    msg: string
  }
}

const swalResponser = (apiResponse: TEmpresaResponse) => {
  const swalResponse = {
    success: {
      title: 'Correcto',
      text: apiResponse.msg,
      icon: 'success',
      confirmButtonColor: 'green',
    },
    error: {
      title: 'Error',
      text: apiResponse.msg,
      icon: 'error',
      confirmButtonColor: 'red',
    },
  }
  return apiResponse.success ? swalResponse.success : swalResponse.error
}

export default swalResponser
