import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Table } from 'react-bootstrap'
import { apiHost } from '../../helpers/variables'
import { styles } from '../../styles/styles'
import { ServiciosProps } from '../../types/types'
import DeleteButton from '../Buttons/deleteButton'
import DisableButton from '../Buttons/disableButton'
import EnableButton from '../Buttons/enableButton'
import Title from '../Title'

export default function ServiciosTable({ servicios }: ServiciosProps) {
  return (
    <div className={styles.tables.generic}>
      <Title name="Identificadores"></Title>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Zona</th>
            <th>Descripción</th>
            <th>Institución</th>
            <th>Técnico</th>
            <th>Status</th>
            <th>Habilitación</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {servicios.map((servicio) => {
            return (
              <tr
                key={servicio._id}
                style={{
                  backgroundColor: servicio.status ? '#c7dbd2' : '#eccccf',
                }}
              >
                <td>{servicio.torre}</td>
                <td>{servicio.descripcion}</td>
                <td>{servicio.empresa}</td>
                <td>{servicio.tecnico}</td>
                <td>{servicio.status ? 'Habilitado' : 'Deshabilitado'}</td>
                <td>
                  {!servicio.status ? (
                    <EnableButton
                      recurso="servicio"
                      id={servicio._id}
                      redirect="servicios"
                    />
                  ) : (
                    <DisableButton
                      recurso="servicio"
                      id={servicio._id}
                      redirect="servicios"
                    />
                  )}
                </td>
                <td>
                  <DeleteButton
                    recurso="servicio"
                    id={servicio._id}
                    redirect="servicios"
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

export async function getServerSideProps() {
  const response = await fetch(`${apiHost}/servicios`)
  const { data } = await response.json()

  return {
    props: {
      servicios: data ? data : [],
    },
  }
}
