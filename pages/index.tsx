import { useAuth0 } from "@auth0/auth0-react"
import LogButton from "../components/Buttons/LogButton"
import Spinner from "../components/Spinner"
import Logo from "../public/logo.jpg"
import Image from "next/image"
import ServiciosTable from "../components/Tables/servicios"
import { apiHost } from "../helpers/variables"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

export default function Index({
  servicios,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const { isAuthenticated: isAuth } = useAuth0()
  return (
    <>
      {!isAuth ? (
        <div>
          <Image src={Logo} alt="Company logo" />
          {LogButton(isAuth)}
        </div>
      ) : (
        <ServiciosTable servicios={servicios} />
      )}
    </>
  )
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
