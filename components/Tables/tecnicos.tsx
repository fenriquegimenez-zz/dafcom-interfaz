import { styles } from '../../styles/styles'
import Title from '../Title'
import { Table } from 'react-bootstrap'
import { TecnicosProps } from '../../types/types'
import DeleteButton from '../Buttons/deleteButton'

export default function TecnicosTable({ tecnicos }: TecnicosProps) {
  return (
    <div className={styles.tables.generic}>
      <Title name="Técnicos"></Title>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nro. CI</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {tecnicos.map((tecnico) => {
            console.log(tecnico._id)
            return (
              <tr key={tecnico._id}>
                <td>{tecnico.documento}</td>
                <td>{tecnico.nombre}</td>
                <td>{tecnico.apellido}</td>
                <td>
                  <DeleteButton
                    recurso="tecnico"
                    id={tecnico._id}
                    redirect="/tecnicos"
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
