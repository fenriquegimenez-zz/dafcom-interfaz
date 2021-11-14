import Title from "../../Title"
import CargarButton from "../../Buttons/cargarButton"
import { TEmpresa, EmpresasProps } from "../../../types/types"
import { useState } from "react"

export default function TecnicosForm({ empresas }: EmpresasProps) {
  return (
    <div className="container-fluid w-50">
      <Title name="Técnicos" />
      <div className="input-group mb-3">
        <span className="input-group-text">CI Nro</span>
        <input className="form-control" type="number" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Nombre(s)</span>
        <input type="text" className="form-control" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Apellido(s)</span>
        <input type="text" className="form-control" />
      </div>
      <div className="input-group mb-3">
        <select name="" id="" className="form-select">
          <option value="">Seleccione la empresa proveedora</option>
          {empresas.map((empresa: TEmpresa) => {
            return (
              <option key={empresa.ruc} value={empresa.ruc}>
                {empresa.razonSocial}
              </option>
            )
          })}
        </select>
      </div>
      <CargarButton recurso="técnico" />
    </div>
  )
}
