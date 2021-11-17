import { useAuth0 } from "@auth0/auth0-react"
import LogButton from "../components/Buttons/LogButton"
import ServiciosTable from "../components/Tables/servicios"
import { apiHost, backgroundImg, bgImgUrl } from "../helpers/variables"
import Image from "next/image"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Landing from "../components/Landing"

export default function Index({
  servicios,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return <ServiciosTable servicios={servicios} />
}

export async function getServerSideProps() {
  const response = await fetch(`${apiHost}/servicios`)
  const servicios = await response.json()
  return {
    props: {
      servicios,
    },
  }
}
