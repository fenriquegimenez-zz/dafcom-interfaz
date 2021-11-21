import { Dropdown } from 'react-bootstrap'
import { MdAddCircleOutline as AddIcon } from 'react-icons/md'
import Link from 'next/dist/client/link'

export default function CargarDropdown() {
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
        {<AddIcon />} Cargar
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Header>Cargar</Dropdown.Header>
        <Link href="/tecnicos/cargar" passHref>
          <Dropdown.Item>Tecnicos</Dropdown.Item>
        </Link>
        <Link href="/proveedores/cargar" passHref>
          <Dropdown.Item>Instituciones</Dropdown.Item>
        </Link>
        <Link href="/servicios/cargar" passHref>
          <Dropdown.Item>Identificadores</Dropdown.Item>
        </Link>
        <Link href="/torres/cargar" passHref>
          <Dropdown.Item>Zonas</Dropdown.Item>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  )
}
