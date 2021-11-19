import { styles } from '../../styles/styles'
import Image from 'next/image'
import Link from 'next/link'
import { Dropdown } from 'react-bootstrap'
import { FiLogOut } from 'react-icons/fi'
import { MdAddCircleOutline as AddIcon } from 'react-icons/md'
import { useAuth0 } from '@auth0/auth0-react'
import { torreUrl } from '../../helpers/variables'

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
              cursor: 'pointer',
            }}
          >
            <Image
              src={torreUrl}
              alt="Company logo"
              height="80%"
              width="72rem"
            />
          </div>
        </Link>
        <Dropdown align={{ xl: 'start' }}>
          <Dropdown.Toggle variant="secondary">{<AddIcon />}</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header>Cargar</Dropdown.Header>
            <Link href="tecnicos" passHref>
              <Dropdown.Item>Tecnicos</Dropdown.Item>
            </Link>
            <Link href="/proveedores/cargar" passHref>
              <Dropdown.Item>Instituciones</Dropdown.Item>
            </Link>
            <Link href="servicios" passHref>
              <Dropdown.Item>Identificadores</Dropdown.Item>
            </Link>
            <Link href="torres" passHref>
              <Dropdown.Item>Zonas</Dropdown.Item>
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
