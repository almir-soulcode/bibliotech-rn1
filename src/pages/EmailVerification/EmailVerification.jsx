import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { getAuth, onAuthStateChanged, sendEmailVerification, signOut } from "firebase/auth";
import { firebaseError } from '../../firebase/firebaseError';
import { Button, Container } from 'react-bootstrap';
import "./EmailVerification.css"



function EmailVerification () {
  const auth = getAuth();

  useEffect(() => {
    const quandoVerifica = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          window.location.href = "http://localhost:3000/";
          
        }
      }
    });

    return () => quandoVerifica();
  }, [auth]);

  const handleSendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        toast.success(`Email de verificação enviado para ${auth.currentUser.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. ${firebaseError(erro.code)}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  };


  return (
    <body className="verificacao-email">
    <div className='verificacao'>
      <Container style={{ backgroundColor: 'transparent' }}>
      <h2 className='titulo-2'>Para concluir o cadastro clique no botão e verifique o seu email</h2>
      <Button id="btn-custom" variant="primary" size="lg" onClick={handleSendEmailVerification}>
      Enviar email de verificação
        </Button>
        <h5 className='titulo-5'><strong>Após verificar seu email, atualize a página para acessar o site!</strong></h5>
      </Container>
    </div>
    </body>
  );
}

export default EmailVerification;
