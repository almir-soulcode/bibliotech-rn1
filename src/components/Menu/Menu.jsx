import "./Menu.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logoIcon from "./../../assets/BookTech/07 - LogoNav.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth";

export function Menu() {
  const navigate = useNavigate();

  function onLogout() {
    logout().then(() => {
      navigate("/login");
    });
  }

  return (
    <Navbar bg="success" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            
            <img src={logoIcon} width="100" alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link id="btn-custom" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link id="btn-custom" as={Link} to="/livros">
              Livros
            </Nav.Link>
            <Nav.Link id="btn-custom" as={Link} to="/autores">
              Autores
            </Nav.Link>
            <Nav.Link id="btn-custom" as={Link} to="/emprestimos">
              Emprestimos
            </Nav.Link>
            <Nav.Link id="btn-custom" as={Link} to="/quiz">
              Quiz
            </Nav.Link>
            <Nav.Link id="btn-custom" as={Link} to="/batepapo">
              Batepapo
            </Nav.Link>
            <Nav.Link id="btn-custom" onClick={onLogout}>
              <i className="bi bi-box-arrow-right"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
