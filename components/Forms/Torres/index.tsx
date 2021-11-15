import Title from "../../Title"
import CargarButton from "../../Buttons/cargarButton"

export default function TorresForm() {
  return (
    <div className="container-fluid w-75">
      <Title name="Torres" />
      <div className="input-group mb-3">
        <span className="input-group-text">Ciudad</span>
        <input className="form-control" type="text" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Dirección</span>
        <input type="text" className="form-control" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Latitud</span>
        <input type="text" className="form-control" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Longitud</span>
        <input type="text" className="form-control" />
      </div>
      <CargarButton recurso="torre" />
    </div>
  )
}
