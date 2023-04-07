import { Button, Container, Table } from "react-bootstrap";
import { deleteAuthor, getAuthors } from "../../firebase/authors";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader/Loader";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export function Authors() {
    const [authors, setAuthors] = useState(null);

    useEffect(() => {
        initializeTable();
    }, []);

    function initializeTable() {
        getAuthors().then(result => {
            setAuthors(result)
        })
    }

    function onDelete(id, author) {
        const deletar = window.confirm(`Tem certeza que deseja excluir o autor ${author}?`);
        if(deletar) {
            deleteAuthor(id).then(() => {
                toast.success(`${author} apagado com sucesso!`, {duration: 2000, position: "bottom-right"});
                initializeTable();
            })
        }
    }

    return (
        <div className="autores">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Autores</h1>
                    <Button variant="success" 
                    as={Link} to="/autor/add" id="btn-custom">
                        Adicionar Autor
                    </Button>
                </div>
                <hr />
                {authors === null ?
                    <Loader />
                    : 
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Autor</th>
                            <th>E-mail</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {authors.map(author => {
                            return (
                                <tr key={author.id}>
                                    <td>{author.nameAuthor}</td>
                                    <td>{author.emailAuthor}</td>
                                    <td>
                                        <Button
                                            as={Link}
                                            to={`/autor/editar/${author.id}`}
                                            variant="warning"
                                            size="sm"
                                            className="me-2"
                                        >
                                            <i className="bi bi-pencil-fill"></i>
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() => onDelete(author.id, author.nameAuthor)}>
                                            <i className="bi bi-trash3-fill"></i>
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            }
            </Container>
        </div>
    )
}