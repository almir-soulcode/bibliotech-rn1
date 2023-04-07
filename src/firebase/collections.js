import { db } from "./config";
import { collection } from "firebase/firestore";

export const livrosCollection = collection(db, "livros");
export const emprestimosCollection = collection(db, "emprestimos");
export const authorsCollection = collection(db, "authors");
export const chatsCollection = collection(db, "chats");
export const usuariosCollection = collection(db, "usuarios");
export const messagesCollection = collection(db, "messages");