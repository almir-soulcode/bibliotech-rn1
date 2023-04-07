import { useState } from "react";
import { Perguntas } from "../../data/perguntas";
import { Button } from "react-bootstrap";
import './Quiz.css'
import imgfinal from "../../assets/images/quiz/imgfinal.png"

export function Quiz() {
    const questions = Perguntas ?? []
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [showPontuacao, setShowPontuacao] = useState(false);
    const [pontos, setPontos] = useState(0);
    const [quizConcluido, setQuizConcluido] = useState(false);

    function proximaPergunta(correta) {
        const nextQuestion = perguntaAtual + 1;
        if (correta) {
            setPontos(pontos + 1);
        }
        if (nextQuestion < questions.length) {
            setPerguntaAtual(nextQuestion);
        } else {
            setShowPontuacao(true);
        }
    }

    function reiniciarQuiz() {
        setPerguntaAtual(0);
        setPontos(0);
        setShowPontuacao(false);
        setQuizConcluido(false);
    }

    return (
        <div className="qcontainer">
            <div className='qquiz'>
            <h1><b>Quiz de Literatura!</b></h1>
            {showPontuacao ? (
                <div className="qpontuacao">
                    <img src={imgfinal} /><br />
                    <hr />
                    <span>Sua pontuação é {pontos} de {questions.length} pontos.</span><br />
                    <Button variant="success" onClick={reiniciarQuiz} id="btn-custom">Tente novamente</Button>
                </div>) : (
                <>
                    <div className="qinforPerguntas">
                        <div className="qcontagemPerguntas">
                            <span>Pergunta {perguntaAtual + 1}/{questions.length} - N° de acertos: {pontos} </span>

                        </div>
                        <div className="qpergunta">
                            <img src={questions[perguntaAtual].img} /><hr />
                            {questions[perguntaAtual].pergunta}</div>

                    </div>

                    <div className="qresposta">
                        {questions[perguntaAtual].opcoesResposta.map((opcoesResposta) =>
                            <div className="qgrupoResposta">
                                <Button box-shadom='none' variant="outline-success" size="lg" onClick={() => proximaPergunta(opcoesResposta.correta)}>
                                    {opcoesResposta.alternativa}{opcoesResposta.resposta}
                                </Button>
                            </div>)}
                    </div>
                    
                </>
            )
            }
        </div>
        </div>
    )
}