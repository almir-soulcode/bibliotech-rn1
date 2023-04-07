import { useEffect, useState } from "react";
import { Badge, Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getEmprestimos } from "../../firebase/emprestimos";
import { Loader } from "../../components/Loader/Loader";


export function Emprestimos() {

    const [emprestimos, setEmprestimos] = useState(null);

    useEffect(() => {
        getEmprestimos().then(busca => {
            setEmprestimos(busca);
        })
    }, []);

    function status(emprestimo) {
        const dataAtual = new Date();
        const dataEntrega = new Date(emprestimo.dataEntrega);

        if (dataAtual <= dataEntrega) {
            emprestimo.status = "Pendente"
            return (
                <Badge bg="warning">{emprestimo.status}</Badge>
            )
        } else if (dataAtual > dataEntrega) {
            emprestimo.status = "Atrasado"
            return (
                <Badge bg="danger">{emprestimo.status}</Badge>
            )
        }
    }

    return (
        <div className="emprestimos">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Emprestimos</h1>
                    <Button as={Link} to="/emprestimos/adicionar" variant="success" id="btn-custom">Adicionar emprestimo</Button>
                </div>
                <hr />
                {
                    emprestimos === null ?
                        <Loader />
                        :
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Leitor</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                    <th>Livro</th>
                                    <th>Status</th>
                                    <th>Data de Empréstimo</th>
                                    <th>Data de Entrega</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {emprestimos.map(emprestimo => {
                                    const dataEmprestimo = emprestimo.dataEmprestimo.toDate().toLocaleDateString('pt-br');
                                    const dataEntregaFormatada = new Date (emprestimo.dataEntrega).toLocaleDateString('pt-br');
                                    return (
                                        <tr key={emprestimo.id}>
                                            <td>{emprestimo.leitor}</td>
                                            <td>{emprestimo.email}</td>
                                            <td>{emprestimo.telefone}</td>
                                            <td>{emprestimo.livro.titulo}</td>
                                            <td>{status(emprestimo)}</td>
                                            <td>{dataEmprestimo}</td>
                                            <td>{dataEntregaFormatada}
                                            </td>
                                            <td>
                                                <Button
                                                    as={Link}
                                                    to={`/emprestimos/editar/${emprestimo.id}`}
                                                    variant="warning"
                                                    size="sm"
                                                >
                                                    <i className="bi bi-pencil-fill"></i>
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