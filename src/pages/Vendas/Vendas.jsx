import "./Vendas.css";
import leitura from "../../assets/images/leitura.gif";
import ceo from "../../assets/images/ceo.png";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/images/carousel/1.png"
import img2 from "../../assets/images/carousel/2.png"
import img3 from "../../assets/images/carousel/3.png"

export function Vendas() {
    return (
        <div class="container px-5">
            <div id="head" class="bg-success bg-gradient row gx-5 align-items-center justify-content-center rounded-3 mt-5">
                <div class="col-lg-8 col-xl-7 col-xxl-6">
                    <div class="my-5 text-center text-xl-start">
                        <h1 class="display-6 fw-bolder text-white mb-2">A leitura engrandece a alma.</h1>
                        <p class="lead fw-normal text-white-50 mb-4">Voltaire</p>
                        <p class="lead fw-normal text-white-50 mb-4">Bem-vindo à nossa biblioteca!
                            Aqui, você encontrará uma vasta seleção de livros, revistas e recursos educacionais para
                            satisfazer sua curiosidade e alimentar sua mente.</p>
                    </div>
                </div>
                <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src={leitura} alt="leitura" /></div>
            </div>

            <section class="py-5" id="features">
                <div class="container my-5">
                    <div class="row gx-5">
                        <div class="col-lg-15">
                            <div class="row gx-5 row-cols-1 row-cols-md-2">
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-success bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
                                    <p class="mb-0">Nossa biblioteca é um lugar acolhedor e amigável,
                                        onde você pode explorar novas ideias, descobrir novos interesses e expandir seu conhecimento.
                                    </p>
                                </div>
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-success bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                                    <p class="mb-0">Temos uma grande variedade de títulos em diversas áreas, incluindo ficção, não ficção,
                                        ciência, história, arte, tecnologia, negócios e muito mais.</p>
                                </div>
                                <div class="col mb-5 mb-md-0 h-100">
                                    <div class="feature bg-success bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                                    <p class="mb-0">Temos um acervo diverso de livros infantis para encantar as crianças
                                        e ajudá-las a desenvolver suas habilidades de leitura.</p>
                                </div>
                                <div class="col h-100">
                                    <div class="feature bg-success bg-gradient text-white rounded-3 mb-3"><i class="bi bi-laptop"></i></div>
                                    <p class="mb-0">Oferecemos uma variedade de serviços e recursos para ajudar os leitores em suas buscas por conhecimento e entretenimento.
                                        Com acesso gratuito à internet e computadores.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="py-5 bg-light">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-xl-10">
                            <div class="text-center">
                                <div class="fs-4 mb-4 fst-italic">"Eu amo a biblioteca! O espaço é muito agradável, com mesas de estudo e áreas confortáveis para relaxar e ler. Também adoro o fato de que eles têm uma seleção de revistas atualizadas que eu posso ler enquanto estou lá. Eu não poderia pedir mais em termos de serviços de biblioteca, e sou muito grato por tudo o que eles fazem para manter a biblioteca um lugar acolhedor e inspirador para todos."</div>
                                <div class="d-flex align-items-center justify-content-center">
                                    <img class="rounded-circle me-3 " id="imagem" src={ceo} alt="..." />
                                    <div class="fw-bold">
                                        Tom Ato
                                        <span class="fw-bold text-success mx-1">/</span>
                                        CEO, Pomodoro
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <section class="py-5">
                <div class="container">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-8 col-xl-6">
                            <div class="text-center">
                                <h2 class="fw-bolder">Bibliotech</h2>
                                <p class="lead fw-normal text-muted mb-5">Somos uma equipe dedicada e apaixonada por compartilhar o conhecimento através de nossos serviços de biblioteca.</p>
                            </div>
                        </div>
                    </div>

                    <aside class="bg-success bg-gradient rounded-3 p-4 p-sm-5 mt-5">
                        <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                            <div class="mb-4 mb-xl-0">
                                <div class="fs-3 fw-bold text-white">Oferecemos o melhor</div>
                                <div class="text-white-50">Na Bibliotech, nos esforçamos para oferecer o melhor em termos de serviços e recursos para nossos usuários.</div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

        </div>
    );
}