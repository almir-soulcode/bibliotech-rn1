import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addAuthor} from "../../firebase/authors";

export function AuthorAdd() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    function onSubmit(data) {
            addAuthor(data).then(() => {
                toast.success("Autor adicionado com sucesso!", { duration: 2000, position: "bottom-right" })
                navigate("/autores");
            })
        }

    return (
        <div className="adicionar-author">
            <Container>
                <h1>Adicionar Autor</h1>
                <hr />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" className={errors.nameAuthor && "is-invalid"} {...register("nameAuthor", { required: "Autor é obrigatório!", maxLength: { value: 255, message: "Limite de 255 caracteres!" } })} />
                        <Form.Text className="text-danger">
                            {errors.nameAuthor?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" className={errors.emailAuthor && "is-invalid"} {...register("emailAuthor", { required: "E-mail é obrigatório!", maxLength: { value: 255, message: "Limite de 255 caracteres!" } })} />
                        <Form.Text className="text-danger">
                            {errors.emailAuthor?.message}
                        </Form.Text>
                    </Form.Group>
                    <Button type="submit" variant="success" id="btn-custom">Salvar</Button>
                </Form>
            </Container>
        </div>
    )
}