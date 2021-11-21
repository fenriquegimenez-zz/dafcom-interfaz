import Title from '../../Title'
import CargarButton from '../../Buttons/cargarButton'
import { TTecnico, EmpresasProps, TEmpresa } from '../../../types/types'
import { FormEvent, useState } from 'react'

export default function TecnicosForm({ empresas }: EmpresasProps) {
  const [documento, setDocumento] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [empresa, setEmpresa] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    setDocumento('')
    setNombre('')
    setApellido('')
    setEmpresa('')
  }

  return (
    <form className="container-fluid w-75" onSubmit={(e) => handleSubmit(e)}>
      <Title name="Técnicos" />
      <div className="input-group mb-3">
        <span className="input-group-text">CI Nro</span>
        <input
          className="form-control"
          type="number"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Nombre(s)</span>
        <input
          type="text"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Apellido(s)</span>
        <input
          type="text"
          className="form-control"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <select
          name=""
          id=""
          className="form-select"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
        >
          <option value="">Seleccione la institución</option>
          {empresas.map((empresa: TEmpresa) => {
            return (
              <option key={empresa._id} value={empresa.ruc}>
                {empresa.razonSocial}
              </option>
            )
          })}
        </select>
      </div>
      <CargarButton
        recurso="técnico"
        body={{
          documento: +documento,
          nombre: nombre,
          apellido: apellido,
          empresa: empresa,
        }}
        endpoint="/tecnico"
      />
    </form>
  )
}
