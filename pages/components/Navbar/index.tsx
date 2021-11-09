import { styles } from "../../../styles/styles"
import Logo from "../../../public/logo.jpg"
import Image from "next/image"

export default function Navbar() {
  const { navbar } = styles.nav
  return (
    <div className={navbar}>
      <div className="container-fluid">
        <div className="navbar-brand">
          <Image src={Logo} alt="Company logo" height={100} width={200} />
        </div>
      </div>
    </div>
  )
}
