import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import loginImg from "../../assets/images/login.png";
import { toast } from "react-hot-toast";
import {  sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Link } from "react-router-dom";



export function RecuperarSenha() {


    const {register, handleSubmit,formState: { errors },} = useForm();

    function onSubmit(data) {
        const { email, confirmarEmail } = data;
        if(email === confirmarEmail) {
            sendPasswordResetEmail(auth, email).then(() => {
                toast.success(`Email enviado para ${email}`, {position: "top-right", duration: 3500});
            }).catch((error) => {
                toast.error(`Email não cadastrado, tente novamente`, {position: "top-right", duration: 4000})
            });
        } else {
            toast.error(`Os emails não correspondem`, {position: "top-right", duration: 3500})
        }
    }
    return(
        <>
        <Container fluid className="my-5">
            <p className="text-center">
                <img src={loginImg} width="256" alt="Logo" />
            </p>
            <h4>Recuperar Senha</h4>
            <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    className={errors.email? "is-invalid" : ""}
                    type="email"
                    placeholder="Seu email"
                    {... register("email", {required: "Campo Obrigatório"})}
                />
                <Form.Text className="invalid-feedback">
                    {errors.email?.message}                    
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Confirme seu email:</Form.Label>
                <Form.Control
                    className={errors.confirmarEmail? "is-invalid" : ""}
                    type="email"
                    placeholder="Seu email"
                    {... register("confirmarEmail", {required: "Campo Obrigatório"})}
                />
                <Form.Text className="invalid-feedback">
                    {errors.confirmarEmail?.message}                    
                </Form.Text>
            </Form.Group>
            <Button className="mx-2 my-2" type="submit" variant="success">
                Enviar
            </Button>
            <Button className="mx-2 my-2" as={Link} to="/login" variant="success">
                Voltar
            </Button>
        </Form>
        </Container>
        </>
    );
}