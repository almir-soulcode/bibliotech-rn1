//import linha 11 e 12 / const linha 17 e 18 /

import "./Menu.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logoIcon from "./../../assets/icons/livros.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useContext } from "react";
import { ThemeContext } from '../../contexts/ThemeContexts';

export function Menu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;
  const alternar = resultado.alternar;
  const navigate = useNavigate();

  function onLogout() {
    logout().then(() => {
      navigate("/login");
    });
  }

  return (
    <div >
      <Navbar className={temaEscuro ? "bg-dark text-light" : "bg-success text-dark"}  variant="light" expand="lg">
        <Button variant="success" onClick={handleShow}>
          Menu
        </Button>

      <Button className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"} onClick={alternar}>Alternar</Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Container fluid>
              <Navbar.Brand>
                <Link to="/">
                  <img src={logoIcon} width="32" alt="Logo" />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle />

              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/livros">
                  Livros
                </Nav.Link>
                <Nav.Link as={Link} to="/emprestimos">
                  Emprestimos
                </Nav.Link>
                <Nav.Link onClick={onLogout}>
                  <i className="bi bi-box-arrow-right"></i>
                </Nav.Link>
              </Nav>
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </div>

  );
}