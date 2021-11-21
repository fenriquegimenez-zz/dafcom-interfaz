import ServiciosTable from '../components/Tables/servicios'
import { apiHost } from '../helpers/variables'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Alert from '../components/Alerts'

export default function Index({
  servicios,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return servicios.length > 0 ? (
    <ServiciosTable servicios={servicios} />
  ) : (
    <Alert header="Error" body="Aún no se han cargado identificadores" />
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
