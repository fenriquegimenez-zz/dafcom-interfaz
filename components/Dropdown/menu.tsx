import { Dropdown } from 'react-bootstrap'
import { FiLogOut } from 'react-icons/fi'
import Link from 'next/dist/client/link'
import { useAuth0 } from '@auth0/auth0-react'
import { GiHamburgerMenu as MenuIcon } from 'react-icons/gi'

export default function MenuDropdown() {
  const { logout } = useAuth0()

  return (
    <Dropdown
      style={{
        cursor: 'pointer',
      }}
    >
      <Dropdown.Toggle
        variant="secondary"
        as="a"
        className="text-dark text-decoration-none"
      >
        {<MenuIcon />} Menú
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Header>Menú</Dropdown.Header>
        <Link href="/" passHref>
          <Dropdown.Item>Inicio</Dropdown.Item>
        </Link>
        <Link href="/tecnicos" passHref>
          <Dropdown.Item>Tecnicos</Dropdown.Item>
        </Link>
        <Link href="/proveedores" passHref>
          <Dropdown.Item>Instituciones</Dropdown.Item>
        </Link>
        <Link href="/servicios" passHref>
          <Dropdown.Item>Identificadores</Dropdown.Item>
        </Link>
        <Link href="/torres" passHref>
          <Dropdown.Item>Zonas</Dropdown.Item>
        </Link>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => logout()}>
          Cerrar sesión {<FiLogOut />}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
