import Title from "../../Title"
import CargarButton from "../../Buttons/cargarButton"

export default function ProveedoresForm() {
  return (
    <div className="container-fluid w-75">
      <Title name="Proveedores" />
      <div className="input-group mb-3">
        <span className="input-group-text">RUC</span>
        <input className="form-control" type="text" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Razón Social</span>
        <input type="text" className="form-control" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Sector</span>
        <input type="text" className="form-control" />
      </div>
      <CargarButton recurso="proveedor" />
    </div>
  )
}
