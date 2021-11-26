import Title from '../../Title'
import CargarButton from '../../Buttons/cargarButton'
import { useState } from 'react'

export default function TorresForm() {
  const [ciudad, setCiudad] = useState('')

  return (
    <div className="container-fluid w-75">
      <Title name="Zonas" />
      <div className="input-group mb-3">
        <span className="input-group-text">Ciudad</span>
        <input
          className="form-control"
          type="text"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />
      </div>
      <CargarButton
        disabled={ciudad === ''}
        recurso="zona"
        body={{
          ciudad,
        }}
        endpoint="torre"
      />
    </div>
  )
}
