import Swal from 'sweetalert2'
import { useRouter } from 'next/dist/client/router'
import { apiHost, mainPage } from '../../helpers/variables'
import { FormEvent } from 'react'

interface Props {
  recurso: string
  id: string
  redirect: string
}

const DeleteButton = ({ recurso, id, redirect }: Props) => {
  const router = useRouter()

  const getErrorSwal = () => {
    Swal.fire({
      title: 'Error',
      text: 'Hubo un error al tratar de eliminar el recurso. \n Por favor reintente.',
      icon: 'error',
      confirmButtonColor: '#dc3545',
    })
  }

  const handleClick = (e: FormEvent) => {
    e.preventDefault()
    Swal.fire({
      title: 'Está seguro?',
      text: 'Está seguro que desea eliminar el recurso?',
      icon: 'warning',
      iconColor: '#dc3545',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      confirmButtonColor: '#dc3545',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: 'gray',
    }).then((result) => {
      if (result.isConfirmed) {
        const requestOptions = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
        fetch(`${apiHost}/${recurso}s?id=${id}`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log('delete status: ' + data.success)
            if (data.success === 1) {
              getErrorSwal()
            } else if (data.success) {
              Swal.fire({
                title: 'Eliminado',
                text: 'El recurso ha sido eliminado correctamente',
                icon: 'success',
                iconColor: '#dc3545',
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
          confirmButtonColor: '#dc3545',
          iconColor: 'gray',
        })
      }
    })
  }
  return (
    <div className="text-center">
      <button className="btn btn-outline-danger" onClick={handleClick}>
        🗑️
      </button>
    </div>
  )
}

export default DeleteButton
