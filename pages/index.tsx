import { useAuth0 } from "@auth0/auth0-react"
import LogButton from "./components/Buttons/LogButton"
import Spinner from "./components/Spinner"
import Logo from "../public/logo.jpg"
import Image from "next/image"

export default function Index() {
  const { isAuthenticated: isAuth, isLoading } = useAuth0()
  return (
    <>
      {/* {!isAuthenticated && <Image src={Logo} alt="Company logo" />}
      {isLoading ? <Spinner /> : LogButton(isAuthenticated)} */}
      {isLoading ? (
        <Spinner />
      ) : !isAuth ? (
        <div>
          <Image src={Logo} alt="Company logo" />
          {LogButton(isAuth)}
        </div>
      ) : (
        LogButton(isAuth)
      )}
    </>
  )
}
