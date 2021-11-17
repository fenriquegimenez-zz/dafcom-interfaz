import Title from "../../Title"
import CargarButton from "../../Buttons/cargarButton"
import { ServiciosFormProps } from "../../../types/types"
import InputGroup from "../../InputGroup"

export default function ServiciosForm({
  torres,
  empresas,
  tecnicos,
}: ServiciosFormProps) {
  return (
    <div className="container-fluid w-75">
      <Title name="Identificadores" />
      <InputGroup>
        <select className="form-select">
          <option value="">Seleccione una zona</option>
          {torres.map(torre => {
            return (
              <option value={torre.id} key={torre.id}>
                {torre.ciudad}
              </option>
            )
          })}
        </select>
      </InputGroup>
      <InputGroup>
        <select className="form-select">
          <option value="">Seleccione una institución</option>
          {empresas.map(empresa => {
            return (
              <option key={empresa.ruc} value={empresa.ruc}>
                {empresa.razonSocial}
              </option>
            )
          })}
        </select>
      </InputGroup>
      <InputGroup>
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
      </InputGroup>
      <InputGroup>
        <label className="input-group-text">Identificador RFID</label>
        <input type="text" className="form-control" id="cardInput" />
      </InputGroup>
      <CargarButton recurso="identificador" />
    </div>
  )
}
