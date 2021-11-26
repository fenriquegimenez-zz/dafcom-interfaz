import { styles } from '../../styles/styles'
import Title from '../Title'
import { Table } from 'react-bootstrap'
import { TorresProps } from '../../types/types'
import DeleteButton from '../Buttons/deleteButton'

export default function TorresTable({ torres }: TorresProps) {
  return (
    <div className={styles.tables.generic}>
      <Title name="Zonas"></Title>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Ciudad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {torres.map((torre) => {
            console.log(torre._id)
            return (
              <tr key={torre._id}>
                <td>{torre.ciudad}</td>
                <td>
                  <DeleteButton
                    recurso="torre"
                    id={torre._id}
                    redirect="torres"
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
