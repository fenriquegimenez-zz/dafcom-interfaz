import Title from '../../Title'
import CargarButton from '../../Buttons/cargarButton'
import { ServiciosFormProps } from '../../../types/types'
import InputGroup from '../../InputGroup'
import { useState } from 'react'
import { validator } from '../../../helpers/validator'

export default function ServiciosForm({
  torres,
  empresas,
  tecnicos,
}: ServiciosFormProps) {
  const [torre, setTorre] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [tecnico, setTecnico] = useState('')
  const [rfid, setRfid] = useState('')
  const [descripcion, setDescripcion] = useState('')
  return (
    <div className="container-fluid w-75">
      <Title name="Identificadores" />
      <InputGroup>
        <select
          className="form-select"
          value={torre}
          onChange={(e) => setTorre(e.target.value)}
        >
          <option value="">Seleccione una zona</option>
          {torres.length > 0 &&
            torres.map((torre) => {
              return (
                <option value={torre.ciudad} key={torre._id}>
                  {torre.ciudad}
                </option>
              )
            })}
        </select>
      </InputGroup>
      <InputGroup>
        <select
          className="form-select"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
        >
          <option value="">Seleccione una institución</option>
          {empresas.length > 0 &&
            empresas.map((empresa) => {
              return (
                <option key={empresa.ruc} value={empresa.razonSocial}>
                  {empresa.razonSocial}
                </option>
              )
            })}
        </select>
      </InputGroup>
      <InputGroup>
        <select
          name=""
          id=""
          className="form-select"
          onChange={(e) => setTecnico(e.target.value)}
          value={tecnico}
        >
          <option value="">Seleccione un técnico</option>
          {tecnicos.length > 0 &&
            tecnicos.map((tecnico) => {
              return (
                <option
                  value={tecnico.nombre + ' ' + tecnico.apellido}
                  key={tecnico.documento}
                >{`${tecnico.nombre} ${tecnico.apellido}`}</option>
              )
            })}
        </select>
      </InputGroup>
      <InputGroup>
        <label className="input-group-text">Identificador RFID</label>
        <input
          type="text"
          className="form-control"
          id="cardInput"
          value={rfid}
          onChange={(e) => setRfid(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <textarea
          cols={30}
          rows={5}
          className="form-control"
          placeholder="Descripción"
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
      </InputGroup>
      <CargarButton
        disabled={validator({
          torre,
          empresa,
          tecnico,
          rfid,
          descripcion,
        })}
        recurso="identificador"
        body={{
          torre,
          empresa,
          tecnico,
          rfid,
          descripcion,
        }}
        endpoint="servicio"
      />
    </div>
  )
}
