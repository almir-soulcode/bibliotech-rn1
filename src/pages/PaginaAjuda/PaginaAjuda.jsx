import { Accordion, Carousel, Container } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import "./PaginaAjuda.css";
import pergunta1 from "./../../assets/images/paginaAjuda/cadastro1.png"
import pergunta2 from "./../../assets/images/paginaAjuda/editar1.png"
import pergunta3 from "./../../assets/images/paginaAjuda/emprestar1.png"
import pergunta4 from "./../../assets/images/paginaAjuda/status1.png"





export function PaginaAjuda() {
    return (
        <div className="ajuda">
            <Container>
                <h1 className="mt-2">Ajuda</h1>
                <hr/>
                {/* ACCORDION PARA PERGUNTAS E RESPOSTAS */}
                <div className="accordion">
                <Accordion>
                    <AccordionItem eventKey="0">
                        <AccordionHeader > Como cadastrar um novo livro? </AccordionHeader>
                        <AccordionBody>
                            {/* CAROUSEL DO ITEM 1 */}
                            <div className="carrossel">
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img 
                                    className="d-block w-100"
                                    src={pergunta1} 
                                    alt="Imagem1" />
                                <Carousel.Caption>
                                    <h3>Passo 1</h3>
                                    <p>Faça isso</p>
                                </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img 
                                    className="d-block w-100"
                                    src={pergunta1} 
                                    alt="Imagem2" />
                                <Carousel.Caption>
                                    <h3>Passo 2</h3>
                                    <p>Faça isso</p>
                                </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img 
                                    className="d-block w-100"
                                    src={pergunta1} 
                                    alt="Imagem3" />
                                <Carousel.Caption>
                                    <h3>Passo 3</h3>
                                    <p>Faça isso</p>
                                </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            </div>
                        </AccordionBody>
                    </AccordionItem>

                    <AccordionItem eventKey="1">
                        <AccordionHeader> Como editar um livro Cadastrado? </AccordionHeader>
                        <AccordionBody>
                            {/* CAROUSEL DO ITEM 2 */}
                            <div className="carrossel">
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img 
                                    className="d-block w-100"
                                    src={pergunta2} 
                                    alt="Imagem1" />
                                <Carousel.Caption variant="dark">
                                    <h3>Passo 1</h3>
                                    <p>Faça isso</p>
                                </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img 
                                    className="d-block w-100"
                                    src={pergunta2} 
                                    alt="Imagem2" />
                                <Carousel.Caption>
                                    <h3>Passo 2</h3>
                                    <p>Faça isso</p>
                                </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img 
                                    className="d-block w-100"
                                    src={pergunta2} 
                                    alt="Imagem3" />
                                <Carousel.Caption>
                                    <h3>Passo 3</h3>
                                    <p>Faça isso</p>
                                </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            </div>
                        </AccordionBody>
                    </AccordionItem>

                    <AccordionItem eventKey="2">
                        <AccordionHeader> Como emprestar um livro? </AccordionHeader>
                        <AccordionBody>
                            {/* CAROUSEL DO ITEM 3 */}
                            <div className="carrossel">
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img 
                                    className="d-block w-100"
                                    src={pergunta3} 
                                    alt="Imagem1" />
                                <Carousel.Caption>
                                    <h3>Passo 1</h3>
                                    <p>Faça isso</p>
                                </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img 
                                    className="d-block w-100"
                                    src={pergunta3} 
                                    alt="Imagem2" />
                                <Carousel.Caption>
                                    <h3>Passo 2</h3>
                                    <p>Faça isso</p>
                                </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img 
                                    className="d-block w-100"
                                    src={pergunta3} 
                                    alt="Imagem3" />
                                <Carousel.Caption>
                                    <h3>Passo 3</h3>
                                    <p>Faça isso</p>
                                </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            </div>
                        </AccordionBody>
                    </AccordionItem>

                    <AccordionItem eventKey="3">
                        <AccordionHeader> Como mudar o status de um livro? </AccordionHeader>
                        <AccordionBody>
                        {/* CAROUSEL DO ITEM 3 */}
                        <div className="carrossel">
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img 
                                    className="d-block w-100"
                                    src={pergunta4} 
                                    alt="Imagem1" />
                                <Carousel.Caption>
                                    <h3>Passo 1</h3>
                                    <p>Faça isso</p>
                                </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img 
                                    className="d-block w-100"
                                    src={pergunta4} 
                                    alt="Imagem2" />
                                <Carousel.Caption>
                                    <h3>Passo 2</h3>
                                    <p>Faça isso</p>
                                </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img 
                                    className="d-block w-100"
                                    src={pergunta4} 
                                    alt="Imagem3" />
                                <Carousel.Caption>
                                    <h3>Passo 3</h3>
                                    <p>Faça isso</p>
                                </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            </div>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
                </div>
            </Container>
        </div>
    );
}