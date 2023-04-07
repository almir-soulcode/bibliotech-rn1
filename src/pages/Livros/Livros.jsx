import { useEffect, useState } from "react";
import { Button, Container, Modal, ModalHeader, Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Info } from "../../components/Info/Info";
import { Loader } from "../../components/Loader/Loader";
import { deleteLivro, getLivros } from "../../firebase/livros";
import "./Livros.css";

export function Livros() {
    const [livros, setLivros] = useState(null);
    const [searchTitle, setSearchTitle] = useState("");
    const [searchIsbn, setSearchIsbn] = useState("");
    const [zoomImg, setZoomImg] = useState(false);

    useEffect(() => {
        initializeTable();
    }, []);

    function initializeTable() {
        getLivros().then((resultados) => {
            setLivros(resultados);
            console.log(resultados);
        });
    }

    function onDeleteLivro(id, titulo) {
        const deletar = window.confirm(
            `Tem certeza que deseja excluir o livro ${titulo}?`
        );
        if (deletar) {
            deleteLivro(id).then(() => {
                toast.success(`${titulo} apagado com sucesso!`, {
                    duration: 2000,
                    position: "bottom-right",
                });
                initializeTable();
            });
        }
    }

    return (
        <div className="livros">
            <Container>
                <div className="d-flex justify-content-between align-items">
                    <h1>Livros</h1>
                    <Button
                        as={Link}
                        to="/livros/adicionar"
                        variant="success"
                        className="m-2"
                        id="btn-custom"
                    >
                        Adicionar Livro
                    </Button>
                </div>
                <hr />
                {livros === null ? (
                    <Loader />
                ) : (
                    <Table striped bordered hover>
                        <thead>
                            <tr class="align-top text-center">
                                <th>
                                    Título
                                    <div class="input-group mb-3">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Digite o título..."
                                            value={searchTitle}
                                            onChange={(event) => {
                                                setSearchTitle(event.target.value);
                                            }}
                                        />
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <i class="bi bi-search"></i>
                                            </span>
                                        </div>
                                    </div>
                                </th>
                                <th>Autor</th>
                                <th>Categoria</th>
                                <th>
                                    ISBN
                                    <div class="input-group mb-3">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Digite o ISBN..."
                                            value={searchIsbn}
                                            onChange={(event) => {
                                                setSearchIsbn(event.target.value);
                                            }}
                                        />
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <i class="bi bi-search"></i>
                                            </span>
                                        </div>
                                    </div>
                                </th>
                                <th>Imagem</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livros
                                .filter((livro) =>
                                    livro.titulo.toLowerCase().includes(searchTitle.toLowerCase())
                                )
                                .filter((livro) =>
                                    livro.isbn.toLowerCase().includes(searchIsbn.toLowerCase())
                                )
                                .map((livro) => {
                                    return (
                                        <tr key={livro.id}>
                                            <td>{livro.titulo}</td>
                                            <td>{livro.autor}</td>
                                            <td>{livro.categoria}</td>
                                            <td>{livro.isbn}</td>
                                            <td>
                                                <img
                                                    onClick={() => setZoomImg(livro.id)}
                                                    src={livro.urlCapa}
                                                    alt={livro.titulo}
                                                />
                                                
                                                <Modal
                                                    show={zoomImg === livro.id}
                                                    onHide={() => setZoomImg(false)}
                                                >
                                                    <img src={livro.urlCapa} />
                                                </Modal>
                                            </td>
                                            <td>
                                                <Info
                                                    titulo={livro.titulo}
                                                    autor={livro.autor}
                                                    categoria={livro.categoria}
                                                    isbn={livro.isbn}
                                                />
                                                <Button
                                                    as={Link}
                                                    to={`/livros/editar/${livro.id}`}
                                                    variant="warning"
                                                    size="sm"
                                                    className="m-2"
                                                >
                                                    <i className="bi bi-pencil-fill"></i>
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="danger"
                                                    onClick={() => onDeleteLivro(livro.id, livro.titulo)}
                                                >
                                                    <i className="bi bi-trash3-fill"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>
                )}
            </Container>
        </div>
    );
}
