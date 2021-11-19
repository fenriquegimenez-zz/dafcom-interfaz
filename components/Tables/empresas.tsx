import { styles } from '../../styles/styles'
import Title from '../Title'
import { Table } from 'react-bootstrap'
import { EmpresasProps } from '../../types/types'
import DeleteButton from '../Buttons/deleteButton'

export default function EmpresasTable({ empresas }: EmpresasProps) {
  return (
    <div className={styles.tables.generic}>
      <Title name="Instituciones"></Title>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>RUC</th>
            <th>Razón Social</th>
            <th>Sector</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map((empresa) => {
            console.log(empresa._id)
            return (
              <tr key={empresa._id}>
                <td>{empresa.ruc}</td>
                <td>{empresa.razonSocial}</td>
                <td>{empresa.sector}</td>
                <td>
                  <DeleteButton
                    recurso="empresa"
                    id={empresa._id}
                    redirect="/proveedores"
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
