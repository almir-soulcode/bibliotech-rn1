import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Root } from "./pages/Root/Root";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { AuthContext } from "./contexts/AuthContext";
import { AdicionarLivro } from "./pages/AdicionarLivro/AdicionarLivro";
import { Livros } from "./pages/Livros/Livros";
import { EditarLivro } from "./pages/EditarLivro/EditarLivro";
import { AdicionarEmprestimo } from "./pages/AdicionarEmprestimo/AdicionarEmprestimo";
import { Emprestimos } from "./pages/Emprestimos/Emprestimos";
import { EditarEmprestimo } from "./pages/EditarEmprestimo/EditarEmprestimo";
import { Vendas } from "./pages/Vendas/Vendas";
import { Authors } from "./pages/Authors/Authors";
import { AuthorAdd } from "./pages/Authors/AuthorAdd";
import { AuthorsEdit } from "./pages/Authors/AuthorsEdit";
import { EsqueciMinhaSenha } from "./pages/EsqueciMinhaSenha/EsqueciMinhaSenha";
import { Politicas } from "./pages/Politicas/Politicas";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import { Quiz } from "./pages/Quiz/Quiz";
import { Loader } from "./components/Loader/Loader";
import { Batepapo2 } from "./pages/Batepapo2/Batepapo2";
import { addUsuario } from "./firebase/usuarios";


export function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (usuarioLogado) {
      const usuarioAtual = {
        displayName: usuarioLogado.displayName,
        email: usuarioLogado.email,
        photoURL: usuarioLogado.photoURL,
      };
      addUsuario(usuarioAtual);
    }
  }, [usuarioLogado]);

  
  if (loading) {
    return <Loader />;
  }

  return (
    
    <>
    
      <AuthContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path="/" element={<Home />} />
              <Route path="/livros" element={<Livros />} />
              <Route path="/livros/adicionar" element={<AdicionarLivro />} />
              <Route path="/livros/editar/:id" element={<EditarLivro />} />
              <Route path="/autores" element={<Authors />} />
              <Route path="/autor/add" element={<AuthorAdd />} />
              <Route path="/autor/editar/:id" element={<AuthorsEdit />} />
              <Route path="/emprestimos" element={<Emprestimos />} />
              <Route path="/emprestimos/adicionar" element={<AdicionarEmprestimo />} />
              <Route path="/emprestimos/editar/:id" element={<EditarEmprestimo />} />
              <Route path="/quiz" element={<Quiz/>}/>
              <Route path="/batepapo" element={<Batepapo2/>}/>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/esqueciminhasenha" element={<EsqueciMinhaSenha />} /> 
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/vendas" element={<Vendas />} />                       
            <Route path="/politicas" element={<Politicas />} />
            <Route path="/verificacao-email" element={<EmailVerification />} />

          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
      <Toaster />
    </>
  );
}
