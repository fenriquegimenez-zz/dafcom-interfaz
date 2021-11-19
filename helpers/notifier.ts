import Swal, { SweetAlertOptions } from 'sweetalert2'
import { TEmpresaResponse } from '../types/types'
import swalResponser from './responser'

const notify = (response: TEmpresaResponse) => {
  Swal.fire(swalResponser(response) as SweetAlertOptions)
}

export default notify
