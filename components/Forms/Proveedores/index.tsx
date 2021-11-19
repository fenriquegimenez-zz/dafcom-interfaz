import Title from '../../Title'
import CargarButton from '../../Buttons/cargarButton'
import { FormEvent, useState } from 'react'
import { apiHost } from '../../../helpers/variables'
import notify from '../../../helpers/notifier'

export default function ProveedoresForm() {
  const [ruc, setRuc] = useState('')
  const [razonSocial, setRazonSocial] = useState('')
  const [sector, setSector] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    setRuc('')
    setRazonSocial('')
    setSector('')
  }

  return (
    <form className="container-fluid w-75" onSubmit={(e) => handleSubmit(e)}>
      <Title name="Instituciones" />
      <div className="input-group mb-3">
        <span className="input-group-text">RUC</span>
        <input
          className="form-control"
          type="text"
          value={ruc}
          onChange={(e) => setRuc(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Razón Social</span>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setRazonSocial(e.target.value)}
          value={razonSocial}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Sector</span>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setSector(e.target.value)}
          value={sector}
        />
      </div>
      <CargarButton
        recurso="institución"
        endpoint="empresa"
        body={{
          ruc: ruc,
          razonSocial: razonSocial,
          sector: sector,
        }}
      />
    </form>
  )
}
