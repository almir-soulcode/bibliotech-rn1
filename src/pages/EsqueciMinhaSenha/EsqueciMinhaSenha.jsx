import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import logoIcon from "../../assets/BookTech/05 - LogoNome.png";
import { useForm } from "react-hook-form";
import { useNavigate, Navigate } from "react-router-dom";
import { loginEmailSenha } from "../../firebase/auth";
import { esqueciMinhaSenha } from "../../firebase/auth";

export function EsqueciMinhaSenha() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();


  function onEsqueciMinhaSenha(data) {
    const { email } = data;
    esqueciMinhaSenha(email)
      .then(() => {
        toast.success(`E-mail enviado! ${email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/login");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  return (
    <Container fluid className="my-5">
      <p className="text-center">
        <img src={logoIcon} width="256" alt="logo do app" />
      </p>
      <h4>Digite o seu e-mail para recuperar a senha</h4>
      <p className="text-muted">
        Lembrou de sua senha? <Link to="/login">Entre</Link>
      </p>
      <hr />

      <Form onSubmit={handleSubmit(onEsqueciMinhaSenha)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Digite seu e-mail</Form.Label>
          <Form.Control
            type="email"
            className={errors.email ? "is-invalid" : ""}
            placeholder="Seu email"
            {...register("email", { required: "O e-mail é obrigatório " })}
          />
          <Form.Text className="invalid-feedback">
            {errors.email?.message}
          </Form.Text>
          <br></br>
        </Form.Group>
        <Button className="m-2" id="btn-custom" variant="primary" type="submit" >
          Recuperar senha
        </Button>

        <Button id="btn-custom" variant="primary" type="submit" >
          <Link to="/login" class="btn-link">Voltar</Link>
        </Button>
      </Form>
    </Container>
  );
}




