import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export function Info(livro) {

    const titulo = livro.titulo
    const autor = livro.autor
    const categoria = livro.categoria
    const isbn = livro.isbn

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button className="bi bi-info-circle" variant="info" size="sm" onClick={handleShow}/>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Mais detalhes:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <p><b>Titulo:</b> {titulo}</p>
                <p><b>Autor: </b>{autor}</p>
                <p><b>Categoria: </b>{categoria}</p>
                <p><b>ISBN: </b>{isbn}</p>
          </Modal.Body>
        </Modal>
      </>
    );

}