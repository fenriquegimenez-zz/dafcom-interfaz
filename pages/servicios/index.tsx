import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import ServiciosForm from "../../components/Forms/Servicios"
import { apiHost } from "../../helpers/variables"

export default function Page({
  torres,
  empresas,
  tecnicos,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <ServiciosForm torres={torres} empresas={empresas} tecnicos={tecnicos} />
  )
}

export async function getServerSideProps() {
  const responseTorres = await fetch(`${apiHost}/torres`)
  const responseEmpresas = await fetch(`${apiHost}/empresas`)
  const responseTecnicos = await fetch(`${apiHost}/tecnicos`)
  const torres = await responseTorres.json()
  const empresas = await responseEmpresas.json()
  const tecnicos = await responseTecnicos.json()
  return {
    props: {
      torres,
      empresas,
      tecnicos,
    },
  }
}
