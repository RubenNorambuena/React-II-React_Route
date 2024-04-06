import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar expand="sm" bg="danger" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link to="/happy-cake" className="text-decoration-none text-white p-2">
              🏠 Home
            </Link>
            <Link to="/happy-cake/contacto" className="text-decoration-none text-white p-2">
              📙 Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <Link to="/happy-cake" className="text-decoration-none text-white p-2">
            🍰 Happy Cake
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}