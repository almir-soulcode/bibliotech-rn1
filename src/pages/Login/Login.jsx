import { useContext } from "react";
import { Button, Container, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/icons/google-white.svg";
import FacebookIcon from "../../assets/icons/facebookIcon.png";
import GitHubIcon from "../../assets/icons/githubicon.png";
import loginImg from "../../assets/images/login.png";
import { AuthContext } from "../../contexts/AuthContext";
import { loginGoogle, loginEmailSenha, loginfacebook, loginGitHub } from "../../firebase/auth";



export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();


  function onSubmit(data) {
    const {email, senha } = data;
    loginEmailSenha(email, senha)
      .then((user) => {
        toast.success(`Entrando como ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  function onLoginGoogle() {
    loginGoogle()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.displayName}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });


  }

  function onLoginFacebook() {
    loginfacebook()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.displayName}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }
  function onLoginGitHub() {
    loginGitHub()
    .then((user) => {
        toast.success(`Bem-vindo(a) ${user.displayName}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  const usuarioLogado = useContext(AuthContext);

  // Se tiver dados no objeto, está logado
  if (usuarioLogado !== null) {
    return <Navigate to="/" />;
  }

  return (
    <Container fluid className="my-5">
      <p className="text-center">
        <img src={loginImg} width="256" alt="Logo" />
      </p>
      <h4>Bem-vindo(a) de volta!</h4>
      <p className="text-muted">
        Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
      <hr />

      <Button className="mb-3" variant="danger" onClick={onLoginGoogle}>
        <img src={googleIcon} width="32" alt="Google icon" /> Entrar com o
        Google
      </Button>

      <Button className="mb-3 ms-3" variant="primary" onClick={onLoginFacebook}>
        <img src={FacebookIcon} width="32" alt="Facebook icon" /> Entrar com o
        Facebook
      </Button>
      <Button className="mb-3 ms-3" variant="secondary" onClick={onLoginGitHub}>
        <img src={GitHubIcon} width="32" alt="Github icon" /> Entrar com o
        GitHub
      </Button>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Seu email"
            className={errors.email ? "is-invalid" : ""}
            {...register("email", { required: "Email é obrigatório" })}
          />
          <Form.Text className="invalid-feedback">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="senha">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Sua senha"
            className={errors.senha ? "is-invalid" : ""}
            {...register("senha", { required: "Senha é obrigatória" })}
          />
          <Form.Text className="invalid-feedback">
            {errors.senha?.message}
          </Form.Text>
        </Form.Group>
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip>Clique aqui para entrar</Tooltip>}>
            <Button type="submit" variant="success">
              Entrar
            </Button>
        </OverlayTrigger>
      </Form>
    </Container>
  );
}
