import { Container, Spinner } from "react-bootstrap";
import loader from '../../assets/BookTech/05 - LogoNome.png';
import "./Loader.css"

export function Loader() {
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <img className='loader-image' src={loader} width="150" alt="imagem de carregamento" />
            <Spinner variant="success"></Spinner>
            <span className="ms-1">Carregando...</span>
        </Container>
    )
}