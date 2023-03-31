import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Avatar(props) {

  return (
    <div d-flex >
      <Nav.Link
        as={Link}
        to="/perfil"
        size={props.size}
        color={props.color}
        className="d-flex justify-content-center align-items-center"
      >
        <i
          className={`bi bi-person-circle text-${props.color} fs-${props.size}`}
        ></i>
      </Nav.Link>
    </div>
  );
}
