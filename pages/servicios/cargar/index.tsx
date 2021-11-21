import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import ServiciosForm from '../../../components/Forms/Servicios'
import { apiHost } from '../../../helpers/variables'

export default function Page({
  torres,
  empresas,
  tecnicos,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  console.log(torres)
  console.log(empresas)
  console.log(tecnicos)
  return (
    <ServiciosForm torres={torres} empresas={empresas} tecnicos={tecnicos} />
  )
}

export async function getServerSideProps() {
  const responseTorres = await fetch(`${apiHost}/torres`)
  const responseEmpresas = await fetch(`${apiHost}/empresas`)
  const responseTecnicos = await fetch(`${apiHost}/tecnicos`)
  const { data: dataTorres } = await responseTorres.json()
  const { data: dataEmpresas } = await responseEmpresas.json()
  const { data: dataTecnicos } = await responseTecnicos.json()
  return {
    props: {
      torres: dataTorres ? dataTorres : [],
      empresas: dataEmpresas ? dataEmpresas : [],
      tecnicos: dataTecnicos ? dataTecnicos : [],
    },
  }
}
