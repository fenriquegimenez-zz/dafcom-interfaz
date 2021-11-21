import TorresTable from '../../components/Tables/zonas'
import { apiHost } from '../../helpers/variables'
import { TorresProps } from '../../types/types'
import Alert from '../../components/Alerts'

export default function Page({ torres }: TorresProps) {
  return torres.length > 0 ? (
    <TorresTable torres={torres} />
  ) : (
    <Alert header="Error" body="Aún no se han cargado zonas" />
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${apiHost}/torres`)
  const { data } = await response.json()

  return {
    props: {
      torres: data ? data : [],
    },
  }
}
