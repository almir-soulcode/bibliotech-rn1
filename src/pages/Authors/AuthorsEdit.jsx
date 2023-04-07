import { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { getAuthor, updateAuthor} from "../../firebase/authors";

export function AuthorsEdit() {

    const {id} = useParams();

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const navigate = useNavigate();

    function onSubmit(data) {
        updateAuthor(id, data).then(() => {
            toast.success("Autor adicionado com sucesso!", { duration: 2000, position: "bottom-right" })
            navigate("/autores");
        })
    }

    useEffect(() => {
        getAuthor(id).then(author => {
            reset(author);
        })
    }, [id, reset]);

    return (
        <div className="edit-author">
            <Container>
                <h1>Editar autor</h1>
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
    );
};