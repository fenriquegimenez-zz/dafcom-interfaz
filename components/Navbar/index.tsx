import { styles } from "../../styles/styles"
import Logo from "../../public/logo.jpg"
import Image from "next/image"
import Link from "next/link"
import { Dropdown } from "react-bootstrap"
import { FiLogOut } from "react-icons/fi"
import { MdAddCircleOutline as AddIcon } from "react-icons/md"
import { useAuth0 } from "@auth0/auth0-react"

export default function Navbar() {
  const { logout } = useAuth0()
  const { navbar } = styles.nav
  return (
    <div className={navbar}>
      <div className="container-fluid">
        <Link passHref href="/">
          <div
            className="navbar-brand"
            style={{
              cursor: "pointer",
            }}
          >
            <Image src={Logo} alt="Company logo" height={100} width={200} />
          </div>
        </Link>
        <Dropdown align={{ lg: "start" }}>
          <Dropdown.Toggle variant="secondary">{<AddIcon />}</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header>Cargar</Dropdown.Header>
            <Link href="tecnicos" passHref>
              <Dropdown.Item>Tecnicos</Dropdown.Item>
            </Link>
            <Link href="proveedores" passHref>
              <Dropdown.Item>Proveedores</Dropdown.Item>
            </Link>
            <Link href="servicios" passHref>
              <Dropdown.Item>Servicios</Dropdown.Item>
            </Link>
            <Link href="torres" passHref>
              <Dropdown.Item>Torres</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => logout()}>
              Cerrar sesión {<FiLogOut />}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}
