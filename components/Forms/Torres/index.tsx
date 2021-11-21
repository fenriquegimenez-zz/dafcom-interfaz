import Title from '../../Title'
import CargarButton from '../../Buttons/cargarButton'
import { useState } from 'react'

export default function TorresForm() {
  const [ciudad, setCiudad] = useState('')
  const [direccion, setDireccion] = useState('')
  const [latitud, setLatitud] = useState('')
  const [longitud, setLongitud] = useState('')

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
      <div className="input-group mb-3">
        <span className="input-group-text">Dirección</span>
        <input
          type="text"
          className="form-control"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Latitud</span>
        <input
          type="text"
          className="form-control"
          value={latitud}
          onChange={(e) => setLatitud(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Longitud</span>
        <input
          type="text"
          className="form-control"
          value={longitud}
          onChange={(e) => setLongitud(e.target.value)}
        />
      </div>
      <CargarButton
        recurso="zona"
        body={{
          ciudad,
          direccion,
          latitud,
          longitud,
        }}
        endpoint="torre"
      />
    </div>
  )
}
