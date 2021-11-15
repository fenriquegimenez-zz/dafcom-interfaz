import Title from "../../Title"
import CargarButton from "../../Buttons/cargarButton"
import { ServiciosFormProps } from "../../../types/types"

export default function ServiciosForm({
  torres,
  empresas,
  tecnicos,
}: ServiciosFormProps) {
  return (
    <div className="container-fluid w-75">
      <Title name="Servicios" />
      <div className="input-group mb-3">
        <select className="form-select">
          <option value="">Seleccione una torre</option>
          {torres.map(torre => {
            return (
              <option value={torre.id} key={torre.id}>
                {torre.ciudad}
              </option>
            )
          })}
        </select>
      </div>
      <div className="input-group mb-3">
        <select className="form-select">
          <option value="">Seleccione un Proveedor</option>
          {empresas.map(empresa => {
            return (
              <option key={empresa.ruc} value={empresa.ruc}>
                {empresa.razonSocial}
              </option>
            )
          })}
        </select>
      </div>
      <div className="input-group mb-3">
        <select name="" id="" className="form-select">
          <option value="">Seleccione un técnico</option>
          {tecnicos.map(tecnico => {
            return (
              <option
                value={tecnico.documento}
                key={tecnico.documento}
              >{`${tecnico.nombre} ${tecnico.apellido}`}</option>
            )
          })}
        </select>
      </div>
      <CargarButton recurso="servicio" />
    </div>
  )
}
