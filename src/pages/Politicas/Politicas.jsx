import { Accordion, ListGroup } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export function Politicas() {
    return (
        <div>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="m-5">
                <Tab eventKey="home" title="Polícica de Privacidade" className="m-5">
                    <h2 className="bg-success bg-gradient align-items-center justify-content-center rounded-3 text-white text-center">
                        Política Privacidade
                    </h2>
                    <p>
                        <span style={{ color: '#444444' }}>
                            A sua privacidade é importante para nós. É política do Bibliotech respeitar a sua privacidade
                            em relação a qualquer informação sua que possamos coletar no site
                            <a href="/"> Bibliotech</a>, e outros sites que possuímos e operamos.
                        </span>
                    </p>
                    <p>
                        <span style={{ color: '#444444' }}>
                            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
                            Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
                            Também informamos por que estamos coletando e como será usado.
                        </span>
                    </p>
                    <p>
                        <span style={{ color: '#444444' }}>
                            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço
                            solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis
                            para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não
                            autorizados.
                        </span>
                    </p>
                    <p>
                        <span style={{ color: '#444444' }}>
                            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros,
                            exceto quando exigido por lei.
                        </span>
                    </p>
                    <p>
                        <span style={{ color: '#444444' }}>
                            O nosso site pode ter links para sites externos que não são operados por nós. Esteja
                            ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos
                            aceitar responsabilidade por suas respectivas&nbsp; políticas de privacidade.
                        </span>
                    </p>
                    <p>
                        <span style={{ color: '#444444' }}>
                            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos
                            fornecer alguns dos serviços desejados.
                        </span>
                    </p>
                    <p>
                        <span style={{ color: '#444444' }}>O uso continuado
                            de nosso site será considerado como aceitação de nossas práticas em torno de privacidade
                            e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do
                            usuário e informações pessoais, entre em contacto connosco.
                        </span>
                    </p>
                    <p>
                        <span style={{ color: '#444444' }}>
                            <ul>
                                <li>
                                    <span style={{ color: '#444444' }}>
                                        O serviço Google AdSense que usamos para veicular publicidade usa um cookie
                                        DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar
                                        o número de vezes que um determinado anúncio é exibido para você.
                                    </span>
                                </li>
                                <li>
                                    <span style={{ color: '#444444' }}>
                                        Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre
                                        privacidade do Google AdSense.
                                    </span>
                                </li>
                                <li>
                                    <span style={{ color: '#444444' }}>
                                        Utilizamos anúncios para compensar os custos de funcionamento deste site e
                                        fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade
                                        comportamental usados por este site foram projetados para garantir que você
                                        forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente
                                        seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
                                    </span>
                                </li>
                            </ul>
                        </span>
                    </p>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h5 style={{ color: '#444444' }}>
                                Compromisso do Usuário
                                </h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h5><span style={{ color: '#444444' }}>Compromisso do Usuário</span></h5>
                                <p>
                                    <span style={{ color: '#444444' }}>
                                        O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Bibliotech
                                        oferece no site e com caráter enunciativo, mas não limitativo:
                                    </span>
                                </p>
                                <ul>
                                    <li>
                                        <span style={{ color: '#444444' }}>
                                            A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ color: '#444444' }}>
                                            B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica,
                                            ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ color: '#444444' }}>
                                            C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Bibliotech, de seus
                                            fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas
                                            de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
                                        </span>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <p className="mt-3">
                        <span style={{ color: '#444444' }}>
                            Esta política é efetiva a partir de&nbsp;1 April 2023 23:15
                        </span>
                    </p>
                </Tab>
                <Tab eventKey="profile" title="Termos e condições" className="m-5">
                <h2 className="bg-success bg-gradient align-items-center justify-content-center rounded-3 text-white text-center">
                        Termos e Condições
                    </h2>
                    <h2><span style={{ color: '#444444' }}>1. Termos</span></h2>
                    <p><span style={{ color: '#444444' }}>Ao acessar ao site <a href="/">Bibliotech</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</span></p>
                    <h2><span style={{ color: '#444444' }}>2. Uso de Licença</span></h2>
                    <p><span style={{ color: '#444444' }}>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Bibliotech , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:&nbsp;</span></p>
                    <ol>
                        <li><span style={{ color: '#444444' }}>modificar ou copiar os materiais;&nbsp;</span></li>
                        <li><span style={{ color: '#444444' }}>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);&nbsp;</span></li>
                        <li><span style={{ color: '#444444' }}>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Bibliotech;&nbsp;</span></li>
                        <li><span style={{ color: '#444444' }}>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou&nbsp;</span></li>
                        <li><span style={{ color: '#444444' }}>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</span></li>
                    </ol>
                    <p><span style={{ color: '#444444' }}>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Bibliotech a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</span></p>
                    <h2><span style={{ color: '#444444' }}>3. Isenção de responsabilidade</span></h2>
                    <ol>
                        <li><span style={{ color: '#444444' }}>Os materiais no site da Bibliotech são fornecidos 'como estão'. Bibliotech não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</span></li>
                        <li><span style={{ color: '#444444' }}>Além disso, o Bibliotech não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</span></li>
                    </ol>
                    <h2><span style={{ color: '#444444' }}>4. Limitações</span></h2>
                    <p><span style={{ color: '#444444' }}>Em nenhum caso o Bibliotech ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Bibliotech, mesmo que Bibliotech ou um representante autorizado da Bibliotech tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</span></p>
                    <h2><span style={{ color: '#444444' }}>5. Precisão dos materiais</span></h2>
                    <p><span style={{ color: '#444444' }}>Os materiais exibidos no site da Bibliotech podem incluir erros técnicos, tipográficos ou fotográficos. Bibliotech não garante que qualquer material em seu site seja preciso, completo ou atual. Bibliotech pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Bibliotech não se compromete a atualizar os materiais.</span></p>
                    <h2><span style={{ color: '#444444' }}>6. Links</span></h2>
                    <p><span style={{ color: '#444444' }}>O Bibliotech não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Bibliotech do site. O uso de qualquer site vinculado é por conta e risco do usuário.</span></p>
                    <p><br /></p>

                    <ListGroup as="ul">
                        <ListGroup.Item className="bg-success bg-gradient align-items-center justify-content-center rounded-3 mt-5">
                        <h5 class="fw-bolder text-white mb-2 mt-2">Modificações</h5>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                        <p><span style={{ color: '#444444' }}>O Bibliotech pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</span></p>
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup as="ul">
                        <ListGroup.Item className="bg-success bg-gradient align-items-center justify-content-center rounded-3 mt-5">
                        <h5 class="fw-bolder text-white mb-2 mt-2">Lei aplicável</h5>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                        <p><span style={{ color: '#444444' }}>Estes termos e condições são regidos e interpretados de acordo com as leis do Bibliotech e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</span></p>
                        </ListGroup.Item>
                    </ListGroup>
                </Tab>
            </Tabs>
        </div>

    );
};