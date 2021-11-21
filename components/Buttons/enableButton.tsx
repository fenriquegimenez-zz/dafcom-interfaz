import Swal from 'sweetalert2'
import { useRouter } from 'next/dist/client/router'
import { apiHost, mainPage } from '../../helpers/variables'
import { FormEvent } from 'react'

interface Props {
  recurso: string
  id: string
  redirect: string
}

export default function EnableButton({ recurso, id, redirect }: Props) {
  const router = useRouter()

  const getErrorSwal = () => {
    Swal.fire({
      title: 'Error',
      text: 'Hubo un error al tratar de habilitar el identificador. \n Por favor reintente.',
      icon: 'error',
      confirmButtonColor: '#dc3545',
    })
  }

  const handleClick = (e: FormEvent) => {
    e.preventDefault()
    Swal.fire({
      title: 'Está seguro?',
      text: 'Está seguro que desea habilitar el identificador?',
      icon: 'warning',
      iconColor: '#019371',
      showCancelButton: true,
      confirmButtonText: 'Sí, habilitar',
      confirmButtonColor: '#019371',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: 'gray',
    }).then((result) => {
      if (result.isConfirmed) {
        const requestOptions = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
        }
        fetch(`${apiHost}/${recurso}s?id=${id}`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log('enable status: ' + data.success)
            if (data.success === 1) {
              getErrorSwal()
            } else if (data.success) {
              Swal.fire({
                title: 'Habilitado',
                text: 'El identificador ha sido habilitado correctamente',
                icon: 'success',
                iconColor: '#019371',
                confirmButtonColor: 'gray',
              })
              router.push(`${mainPage}/${redirect}`)
            } else {
              console.log('success: ' + data.success)
              getErrorSwal()
            }
          })
          .catch((e) => {
            console.log(e)
            getErrorSwal()
          })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelado',
          text: 'Solicitud cancelada.',
          icon: 'info',
          confirmButtonColor: '#019371',
          iconColor: '#019371',
        })
      }
    })
  }
  return (
    <div className="text-center">
      <button className="btn btn-outline-success" onClick={handleClick}>
        ✅
      </button>
    </div>
  )
}
